import * as dotenv from 'dotenv';
import { IDatabaseConfig } from '../interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_DEV,
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        urlDatabase: process.env.DB_URL
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_TEST,
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        urlDatabase: process.env.DB_URL
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_PROD,
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        urlDatabase: process.env.DB_URL
    }
}