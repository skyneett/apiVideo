import {Router} from 'express';
import pool from '../db.js';

const router = Router()

router.get('/ping',async(req,res) => {
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result)
});

router.get('/employes', (req, res) => {
  pool.query('SELECT * FROM employee', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener empleados' });
      return;
    }
    res.json(results);
  });
})


export default router 