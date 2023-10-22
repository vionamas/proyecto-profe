import express from 'express';
import {pool} from './db.js';
import {PORT} from './config.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Benviguts');
})

app.get('/pelis', async (req, res) => {
   const [rows] =  await pool.query('SELECT * from Peliculas' )

    console.log(rows);
    res.json(rows);
})

app.listen(PORT);


console.log('listening on port '+ PORT)