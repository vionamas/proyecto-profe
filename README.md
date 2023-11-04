# Nombre de la Aplicación

API que accede a la las peliculas la pagina http://www.themoviedb.org para deleccionar e incluirlas en una Base de Datos propia

## Requisitos

- Node.js y npm instalados en tu sistema.
- Base de datos Mysql 
- Registro y obtención de credenciales en http://www.themoviedb.org

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/albertomozo/node_express_mysql.git

   ```bash	
   cd nombre-del-repo

2. Instala las dependencias

    ```bash
    npm install
    ``` 

# Configuracion 

1. Modifica los datos de fichero configuración src/config.js
    ```javascript
   export const DB_HOST = process.env.DB_HOST || 'localhost'
   ...
   ``` 

2. Crea Una Base de datos llamada peliculas

    - Estructura y datos BASE DATOS
    ```sql
        -- Volcando estructura para tabla peliculas.genero
    DROP TABLE IF EXISTS `genero`;
    CREATE TABLE IF NOT EXISTS `genero` (
    `id` bigint(20) NOT NULL,
    `genero` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Volcando estructura para tabla peliculas.peliculas
    DROP TABLE
     IF EXISTS `peliculas`;
    CREATE TABLE IF NOT EXISTS `peliculas` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `tmdb_id` varchar(20) NOT NULL,
    `titulo` varchar(255) NOT NULL,
    `poster` varchar(255) NOT NULL,
    `estado` enum('A','D','B') NOT NULL COMMENT 'A-activo D-desactivado  B-Borrar',
    `estreno` date NOT NULL,
    `overview` text,
    `opinion` text,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;

    -- Volcando estructura para tabla peliculas.peli_genero
    DROP TABLE IF EXISTS `peli_genero`;
    CREATE TABLE IF NOT EXISTS `peli_genero` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `peliculaid` bigint(20) NOT NULL,
    `generoid` bigint(20) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4;

        ```
    
# Uso

1. Inicio de la aplicacion

    1.1. Entorno desarrollo 

    ```bash
    npm run dev
    ```

    1.2 Entorno producción

    ```bash	
    npm run start
    ```

2. Accesos a la aplicación, a traves de los endpoints o de un cliente REST como POSTMAN

# Endpoints de la API

📎[Endpoint (POSTMAN)](https://documenter.getpostman.com/view/25347432/2s9YXe6P7e)

# Aplicacion en Internet

🎬[API Pelis](https://nodeexpressmysql-production.up.railway.app)

# Manual 

📘[Manual](https://docs.google.com/presentation/d/1EVGXeU-fIpF7XotNcRjn7pBZJfXMYP_s09qnSx9reB4/edit?usp=sharing)




