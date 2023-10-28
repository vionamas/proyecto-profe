import express from 'express';
import {pool} from './db.js';
import {PORT, TMDB_FETCH_OPTIONS,TMDB_LANG} from './config.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Benviguts');
})
app.get('/api', (req, res) => {
    const respuesta = '<H1>API PELICULAS</H1>';
    res.send(respuesta)
})

app.get('/api/pelis', async (req, res) => {
   const [rows] =  await pool.query('SELECT * from peliculas' )

    console.log(rows);
    res.json(rows);
})


/* RUTA ERRONEA O HACEMOS TEMPLATES O ACCEDEMOS DESDE OTRO SERVIDOR MEDIANTE FETCH */
app.get('/client/', (req, res) => {
    res.redirect('client/index.html')
})
/* mostramos pelicula de tmdb */

app.post('/api/pelis/tmdb/:tmdb_id', async (req, res) => {
    
     console.log(req) 
     
     const tmdb_id = req.params.tmdb_id;
     fetch(`https://api.themoviedb.org/3/movie/${tmdb_id}?language=${TMDB_LANG}`, TMDB_FETCH_OPTIONS)
     .then(response => response.json())
     .then(response => {
         console.log(response)
         
         
 
 
         // mostrar resultados
        // document.getElementById("resultado").innerHTML = trespuesta;
        res.send(response)
     
     }) 
     .catch(err => {
        console.error(err);
       res.send('error' + err.message)});
   

     

 })
app.listen(PORT);


console.log('listening on port '+ PORT)