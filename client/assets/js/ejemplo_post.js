// recuperamos el querystring
const querystring = window.location.search
console.log(querystring) // '?q=pisos+en+barcelona&ciudad=Barcelona'

// usando el querystring, creamos un objeto del tipo URLSearchParams
const paramsurl = new URLSearchParams(querystring)

pbody = paramsurl.get('body');


switch (pbody) {
    case  'formdata' :
          /************* FORMDATA  ****************/

          var formdata = new FormData();
          formdata.append("id", "1");
          formdata.append("nombre", "nombre");

          var requestOptions = {
            method: 'POST',
            body: formdata,
          redirect: 'follow'
          };

          break;
    case  'url' :
        /**********    URL-ENCODE  ***************/

        var params = new URLSearchParams();
          params.append("id", "1");
          params.append("nombre", "nombre");
          
          var requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded', // Establece el tipo de contenido a application/x-www-form-urlencoded
            },
            body: params.toString(), // Convierte los parámetros en una cadena codificada
            redirect: 'follow'
          };
          break;

     default :

  
        /** json  */
              var data = {
                id: "1",
                nombre: "nombre"
              };


              var requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Establece el tipo de contenido a application/json
                },
                body: JSON.stringify(data), // Convierte los datos en una cadena JSON
                redirect: 'follow'
              };
              break;
    }

/*           LANZAMIENTO DE URL */

console.log(requestOptions);

fetch("http://127.0.0.1:3000/api/post?apikey=342334", requestOptions)
  .then(response => response.text())
  .then(result => {
    document.getElementById('app').innerHTML = result;
    console.log(result);
  })
  .catch(error => console.log('error', error));
  
  