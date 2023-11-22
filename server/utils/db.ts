import pg from 'pg';
let pool = new pg.Client({
    database: 'newsletters',
    user: 'postgres',
    password: process.env.PG_PASSWORD,
});
pool.connect().then(e=>console.log('Connected to PostgreSQL!')).catch(e => console.error(e));
export default pool;