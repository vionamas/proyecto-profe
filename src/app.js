import express from 'express';
import {pool} from './db.js';
import {PORT, TMDB_FETCH_OPTIONS,TMDB_LANG} from './config.js';

const app = express();
// Agrega el middleware de análisis del cuerpo del mensaje para procesar solicitudes POST
app.use(express.json()); // Para JSON
app.use(express.urlencoded({ extended: true })); // Para formularios codificados

app.get('/', (req, res) => {
    res.send('Benviguts');
})
app.get('/api', (req, res) => {
    res.redirect('https://documenter.getpostman.com/view/25347432/2s9YXe6P7e');
    // redireccion a la pagina de POSTMAN donde esta publicada la documentación
})

app.get('/api/pelis', async (req, res) => {
    const [rows] =  await pool.query('SELECT * from peliculas' )
    //const [rows] =  await pool.query('SELECT * from peliculas,peli_genero, genero where peliculas.id = peli_genero.peliculaid and peli_genero.generoid = genero.id' )
    console.log(rows);
    res.json(rows);
})

app.get('/api/pelis2', async (req, res) => {
    
    const query = 'SELECT p.id, p.titulo, p.tmdb_id, p.poster, g.id AS genero_id, g.genero AS genero FROM peliculas p     LEFT JOIN peli_genero pg ON p.id = pg.peliculaid     LEFT JOIN genero g ON pg.generoid = g.id';

    const [rows] =  await pool.query(query )
    const moviesWithGenres = [];
    const moviesMap = new Map();

    for (const row of rows) {
        const { id, titulo, tmdb_id, poster, genero_id, genero } = row;
        if (!moviesMap.has(tmdb_id)) {
            moviesMap.set(tmdb_id, {
                id,
                titulo,
                tmdb_id,
                poster,
                generos: [],
            });
        }
        if (genero_id) {
            moviesMap.get(tmdb_id).generos.push({ id: genero_id, genero });
        }
    }

    const results = [...moviesMap.values()];
    const resultadoJSON = { results };

    //console.log(resultadoJSON);  
    //console.log(rows);
    res.json(resultadoJSON);
})

app.post('/api/post',  (req, res) => {
    const params = req.body;
    console.log( req.body);
    let texto = ''
    for (const key in req.body) 
    {
        console.log(key + ': ' + req.body[key]);
        texto += key + ': ' + req.body[key]  + '|';
    }
    res.send(texto);
})


/* RUTA ERRONEA O HACEMOS TEMPLATES O ACCEDEMOS DESDE OTRO SERVIDOR MEDIANTE FETCH */
app.get('/client/', (req, res) => {
    res.redirect('client/index.html')
})
/* mostramos pelicula de tmdb */



app.post('/api/pelis/tmdb/:tmdb_id', async (req, res) => {
     //console.log(req)
     // recuperar los datos la api que necesitamos
     const tmdb_id = req.params.tmdb_id;
     fetch(`https://api.themoviedb.org/3/movie/${tmdb_id}?language=${TMDB_LANG}`, TMDB_FETCH_OPTIONS)
     .then(response => response.json())
     .then(async response =>  {
        // creas registro a a partir de los valores de la api. 
        let query = `INSERT INTO peliculas  (tmdb_id,titulo,poster,estado,estreno,overview,opinion) VALUES (${response.id},'${response.original_title}','${response.poster_path}','D','${response.release_date}','${response.overview}','valor')`;
        const [result] = await pool.query(query);
        // obtenemos el id de la ultima query 
        const peliculaId = result.insertId;     
        console.log(query);
        // leemos los generos de la peli y generamos los registros en peli_genero
        const generos = response.genres;
        for (const genero of generos){
            let query = `INSERT INTO peli_genero (peliculaid,generoid) VALUES (${peliculaId}, ${genero.id})`; 
            pool.query(query);
            console.log (query);
        }
        // generamos respuesta indicando id de pelicula insertada
        const respuesta = JSON.parse( `{"respuesta":200,"id":"${peliculaId}"}`);
         res.json(respuesta);
     
     }) 
     .catch(err => {
        console.error(err);
       res.send('error' + err.message)});
  })

  app.get('/api/pelis/tmdb/search', async (req, res) => {
    // req.query accede a los elemnto de una query
    const search  = req.query.query;
    console.log('🟨req.query  : ' + req.query);
    console.log('⚠ req.query.query : ' + req.query.query);
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&language=${TMDB_LANG}`;
    console.log(url)
     fetch(url, TMDB_FETCH_OPTIONS)
    .then(response => response.json())
    .then(response => {
        //console.log(response)   
        res.send(response)
    
    }) 
    .catch(err => {
       console.error(err);
      res.send('error' + err.message)}); 
 })

app.listen(PORT);


console.log('listening on port '+ PORT)