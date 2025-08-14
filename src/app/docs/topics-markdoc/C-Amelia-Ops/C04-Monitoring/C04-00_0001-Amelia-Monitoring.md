# Amelia Monitoring Guide

## Introduction


## Accessing Monitoring


## What You'll Learn



## Log Scrubber Configuration Files {% #LogScrubber %}


| Path | Regex |
|------|-------|
| /apps/IPsoft/amelia/amelia-account-service/var/log/amelia-account-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-adb/mysqld.log | {$MYSQL_ADB_REGEX} |
| /apps/IPsoft/amelia/amelia-admin-service/var/log/amelia-admin-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-admin-web/var/log/amelia-admin-web.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-batch-service/var/log/amelia-batch-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-engine-service/var/log/amelia-engine-service.log | {$AMELIA_ENGINE_LOGGER} |
| /apps/IPsoft/amelia/amelia-escalation-service/var/log/amelia-escalation-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-gateway-service/var/log/amelia-gateway-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-integration-gateway-service/var/log/amelia-integration-gateway-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-integration-service/var/log/amelia-integration-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-kdb-master/mysqld.log | {$MYSQL_KDB_MASTER_REGEX} |
| /apps/IPsoft/amelia/amelia-kdb-slave/mysqld.log | {$MYSQL_KDB_SLAVE_REGEX} |
| /apps/IPsoft/amelia/amelia-langchain-service/var/log/amelia-langchain-service.log | {$AMELIA_LANGCHAIN_REGEX} |
| /apps/IPsoft/amelia/amelia-model-server/var/log/amelia-model-server.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-orchestrator/var/log/amelia-orchestrator.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-redis-cdb-13361/redis.log | {$REDIS_CDB_13361_REGEX} |
| /apps/IPsoft/amelia/amelia-redis-odb-13362/redis.log | {$REDIS_REGEX} |
| /apps/IPsoft/amelia/amelia-rest-gateway/var/log/amelia-rest-gateway.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-stt-service/var/log/amelia-stt-service.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/amelia/amelia-user-web/var/log/amelia-user-web.log | {$AMELIA_USER_WEB_LOG} |
| /apps/IPsoft/ipsoft-av-gateway/var/log/ipsoft-av-gateway.log | {$AMELIA_LOG_REGEX} |
| /apps/IPsoft/redis/redis.log | {$REDIS_REGEX} |


## More Resources

