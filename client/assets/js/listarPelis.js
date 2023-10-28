url = "http://localhost:3000/api/pelis";
fetch(url)
.then(response => response.json())
.then(response => {
    console.log(response);
    //trespuesta= JSON.stringify(response);
    trespuesta = '<table>';
    for (var i = 0; i < response.length; i++) {
        trespuesta += `<tr><td>${response[i].titulo}</td></tr>`;
    }
    trespuesta += '</table>';
    


    // mostrar resultados
    document.getElementById("app").innerHTML = trespuesta;


})
.catch(err => console.error(err));