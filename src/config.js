/* CONFIGURACION ACCESOS A DB */
export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_NAME = process.env.DB_NAME || 'peliculas'

/* VALORES THEMOVIEDB.ORG */
export const TMDB_TOKEN_AUTH = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGZlZTM0N2I5MWRhODM5MzJlYThiOWRhYTBlZGVjZSIsInN1YiI6IjYwODJmZTgyMDFiMWNhMDA0MWVjMmUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdoxXdJncEQQ24BduFOAz-P3gt6I7pPd6s7vWc8-NrM';
export const TMDB_FETCH_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + TMDB_TOKEN_AUTH
    }
  };
export const TMDB_IMAGE ='';
export const TMDB_LANG ='es';

