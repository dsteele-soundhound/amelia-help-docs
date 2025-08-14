'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '@/utils/navigationGenerator';

interface SidebarProps {
  navigation: NavigationItem[];
}

interface SidebarItemProps {
  item: NavigationItem;
  level?: number;
  isOpen: boolean;
  onToggle: () => void;
  currentPath: string;
  path: string[];
  expandedItems: Record<string, boolean>;
  toggleItem: (path: string) => void;
}

function SidebarItem({ 
  item, 
  level = 0, 
  isOpen, 
  onToggle, 
  currentPath, 
  path = [], 
  expandedItems, 
  toggleItem 
}: SidebarItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isCurrentPath = item.href === currentPath;
  const isPrimaryLevel = level === 0;
  const isSecondaryLevel = level === 1;
  
  const handleToggle = () => {
    if (hasChildren) {
      onToggle();
    }
  };

  // Primary navigation styling
  const primaryClasses = `
    group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold
    transition-all duration-200 
    ${isCurrentPath 
      ? 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-100' 
      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
    }
  `;

  // Secondary navigation styling  
  const secondaryClasses = `
    group flex w-full items-center justify-between rounded-md py-2 pl-7 pr-3 text-sm
    transition-all duration-200
    ${isCurrentPath
      ? 'bg-primary-50 text-primary-700 font-medium dark:bg-primary-900/30 dark:text-primary-200'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
    }
  `;

  // Tertiary and deeper navigation styling
  const tertiaryClasses = `
    group flex w-full items-center justify-between rounded-md py-1.5 text-xs
    transition-all duration-200 pr-3
    ${isCurrentPath
      ? 'text-primary-600 font-medium dark:text-primary-300'
      : 'text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400'
    }
  `;

  // Calculate padding for tertiary levels using inline styles for SSR consistency
  const getTertiaryStyle = () => {
    if (level <= 2) return { paddingLeft: '2.5rem' }; // pl-10
    return { paddingLeft: `${7 + (level - 2) * 3 * 0.25}rem` };
  };

  const getItemClasses = () => {
    if (isPrimaryLevel) return primaryClasses;
    if (isSecondaryLevel) return secondaryClasses;
    return tertiaryClasses;
  };

  // Fixed chevron classes to avoid hydration mismatches
  const baseChevronClasses = "h-4 w-4 transition-transform duration-200";
  const levelColorClasses = isPrimaryLevel 
    ? "text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-400"
    : "text-gray-300 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-500";
  
  const chevronClasses = baseChevronClasses + " " + levelColorClasses;

  if (item.href) {
    return (
      <Link 
        href={item.href} 
        className={getItemClasses()}
        style={!isPrimaryLevel && !isSecondaryLevel ? getTertiaryStyle() : undefined}
      >
        <span className="truncate">{item.name}</span>
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        className={getItemClasses()}
        style={!isPrimaryLevel && !isSecondaryLevel ? getTertiaryStyle() : undefined}
      >
        <span className="truncate text-left">{item.name}</span>
        {hasChildren && (
          <ChevronRightIcon 
            className={`${chevronClasses} ${isOpen ? 'rotate-90' : ''}`}
            suppressHydrationWarning
          />
        )}
      </button>
      {hasChildren && (
        <div 
          className={`mt-1 space-y-1 ${isPrimaryLevel ? 'mb-2' : ''} ${!isOpen ? 'hidden' : ''}`}
          suppressHydrationWarning
        >
          {item.children?.map((child, index) => {
            const childPath = [...path, index.toString()];
            const childPathKey = childPath.join('-');
            const childIsOpen = expandedItems[childPathKey] || false;
            
            return (
              <SidebarItem
                key={index}
                item={child}
                level={level + 1}
                isOpen={childIsOpen}
                onToggle={() => toggleItem(childPathKey)}
                currentPath={currentPath}
                path={childPath}
                expandedItems={expandedItems}
                toggleItem={toggleItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}


// Helper function to get initial expanded state based on current path
function getInitialExpandedState(navigation: NavigationItem[], currentPath: string): Record<string, boolean> {
  const expanded: Record<string, boolean> = {};
  
  function markExpanded(items: NavigationItem[], path: string[] = []): boolean {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const currentItemPath = [...path, i.toString()].join('-');
      
      if (item.href === currentPath) {
        // Mark all parent paths as expanded
        for (let j = 0; j < path.length; j++) {
          const parentPath = path.slice(0, j + 1).join('-');
          expanded[parentPath] = true;
        }
        return true;
      }
      
      if (item.children) {
        const found = markExpanded(item.children, [...path, i.toString()]);
        if (found) {
          expanded[currentItemPath] = true;
        }
      }
    }
    return false;
  }
  
  markExpanded(navigation);
  return expanded;
}

const STORAGE_KEY = 'docs-sidebar-expanded-items';

// Helper function to load expanded state from localStorage
function loadExpandedFromStorage(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

// Helper function to save expanded state to localStorage with debouncing
let saveTimeout: NodeJS.Timeout;
function saveExpandedToStorage(expandedItems: Record<string, boolean>) {
  if (typeof window === 'undefined') return;
  
  // Clear previous timeout
  clearTimeout(saveTimeout);
  
  // Debounce the save operation
  saveTimeout = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(expandedItems));
    } catch {
      // Ignore localStorage errors
    }
  }, 300); // 300ms debounce
}

export default function Sidebar({ navigation }: SidebarProps) {
  const pathname = usePathname();
  
  // Initialize with both localStorage and current path requirements for no-flicker UX
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(() => {
    const requiredExpanded = getInitialExpandedState(navigation, pathname);
    const savedExpanded = loadExpandedFromStorage();
    
    // Merge saved state with required state for current path
    return {
      ...savedExpanded,  // Load saved state first
      ...requiredExpanded  // Ensure current path is expanded (overrides saved state if conflicts)
    };
  });

  // Update expanded state when pathname changes
  useEffect(() => {
    const requiredExpanded = getInitialExpandedState(navigation, pathname);
    setExpandedItems(prev => ({
      ...prev,  // Keep existing expanded items
      ...requiredExpanded  // Add new required expanded items
    }));
  }, [pathname, navigation]);

  // Save to localStorage when expandedItems changes
  useEffect(() => {
    saveExpandedToStorage(expandedItems);
  }, [expandedItems]);

  const toggleItem = (path: string) => {
    setExpandedItems(prev => {
      const newState = {
        ...prev,
        [path]: !prev[path]
      };
      return newState;
    });
  };

  const renderNavItem = (item: NavigationItem, index: number, path: string[] = []): React.ReactNode => {
    const currentItemPath = [...path, index.toString()].join('-');
    const isOpen = expandedItems[currentItemPath] || false;
    
    return (
      <SidebarItem
        key={currentItemPath}
        item={item}
        level={path.length}
        isOpen={isOpen}
        onToggle={() => toggleItem(currentItemPath)}
        currentPath={pathname}
        path={[...path, index.toString()]}
        expandedItems={expandedItems}
        toggleItem={toggleItem}
      />
    );
  };

  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0" suppressHydrationWarning>
      {/* Sidebar content */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-shrink-0 items-center px-6 py-6 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              Documentation
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-4 py-6 space-y-2">
          <div className="space-y-1">
            {navigation.map((item, index) => renderNavItem(item, index))}
          </div>
        </nav>

        {/* Footer */}
        <div className="flex flex-shrink-0 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>Amelia & Autonomics</span>
          </div>
        </div>
      </div>
    </div>
  );
}