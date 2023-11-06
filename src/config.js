/* CONFIGURACION ACCESOS A DB */
export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root1234'
export const DB_NAME = process.env.DB_NAME || 'peliculas'

/* VALORES THEMOVIEDB.ORG */
export const TMDB_TOKEN_AUTH = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTZhOGEyODIyODE4ZWExNDBhNjM2OWNlZTY3MDdhMyIsInN1YiI6IjY1M2I1N2IyY2M5NjgzMDBhZGU1ZTZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RK_xgf05bLLZkD4bR4DUQ4AQ55a7LQ9EKf1UiwPlP0g';
export const TMDB_FETCH_OPTIONS  = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer ' + TMDB_TOKEN_AUTH,
      'Access-Control-Allow-Origin' : '*' // Configura el encabezado CORS
    // Otras cabeceras personalizadas que puedas necesitar
    },
    mode: 'cors', // Establece el modo CORS
    credentials: 'same-origin', // Configura las credenciales de la solicitud
  };
export const TMDB_IMAGE ='';
export const TMDB_LANG ='es';

