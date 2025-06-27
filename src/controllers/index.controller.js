import pool from '../db.js';
export const ping = async(req,res) => {
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result)
}

export const shearch = async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM employee');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};