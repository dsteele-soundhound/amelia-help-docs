const withMarkdoc = require('@markdoc/next.js');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  turbopack: {
      resolveExtensions: ['.md', '.mdoc', '.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
      resolveAlias: {
        '@': path.resolve(__dirname, 'src'),
        '@docs': path.resolve(__dirname, '../topics-markdoc')
      },
      rules: {
        '*.md': {
          loaders: ['@markdoc/next.js/loader'],
          as: '*.js'
        },
        '*.mdoc': {
          loaders: ['@markdoc/next.js/loader'], 
          as: '*.js'
        }
      }
    }
};

module.exports = withMarkdoc()(nextConfig);