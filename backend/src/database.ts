import knex from 'knex';
import { config } from 'dotenv';
config();

const database = knex({
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  }
});

export default database;