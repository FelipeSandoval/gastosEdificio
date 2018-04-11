require('dotenv').config();

CONFIG = {}

CONFIG.app          = process.env.APP   || 'development';
CONFIG.port         = process.env.PORT  || '3000';


CONFIG.db_dialect   = process.env.DB_DIALECT || 'postgres';
CONFIG.db_host      = process.env.DB_HOST    || 'localhost';
CONFIG.db_port      = process.env.DB_PORT    || '5432';
CONFIG.db_name      = process.env.DB_NAME    || 'gastosedificiosdatabase';
CONFIG.db_user      = process.env.DB_USER    || 'gastosedificios';
CONFIG.db_password  = process.env.DB_PASSWORD|| '1234';