import { createPool } from 'mysql2/promise';
// Configuración de la conexión a la base de datos MySQL

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Por defecto en XAMPP
    port: 3306,
    database: 'companydb'
});

export default pool;