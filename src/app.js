import express from 'express';
import {pool} from './db.js'

const app = express();

app.get('/', (req, res) => {
    res.send('Benviguts');
})

app.get('/pelis', async (req, res) => {
   //const result =  pool.query('SELECT "Hello Word" as RESULT' )
   // const result =  await pool.query('SELECT "Hello Word" as RESULT' )
   //const [result] =  await pool.query('SELECT "Hello Word" as RESULT' )
   const result =  await pool.query('SELECT * from Peliculas  as RESUlT' )

    console.log(result);
    res.send('Welcome to server');
})

app.listen(3000);


console.log('listening on port 3000')