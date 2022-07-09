import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const user =  'postgres';
const password = process.env.PASSWORD_DB;
const host = 'localhost';
const port = 5432;
const database = 'desafio_projectiva';

const { Pool } = pg;
export const connection = new Pool({
    user, 
    password, 
    host,
    port,
    database
});