function searchPelis() {
    search = document.querySelector('#search').value;
    url = `http://localhost:3000/api/pelis/tmdb/search?query=${search}`;
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        //trespuesta= JSON.stringify(response);
        trespuesta = '<table>';
        for (var i = 0; i < response.results.length; i++) {
            trespuesta += `<tr><td>${response.results[i].original_title}</td></tr>`;
        }
        trespuesta += '</table>';
        


        // mostrar resultados
        document.getElementById("app").innerHTML = trespuesta;


    })
    .catch(err => console.error(err));

}