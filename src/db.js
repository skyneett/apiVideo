import { createPool } from 'mysql2/promise';
// Configuración de la conexión a la base de datos MySQL
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from './config.js';


const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD, // Por defecto en XAMPP
    port: DB_PORT,
    database: DB_DATABASE
});

export default pool;