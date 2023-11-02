function searchPelis() {
    search = document.querySelector('#search').value;
    url = `http://localhost:3000/api/pelis/tmdb/search?query=${search}`;
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        //trespuesta= JSON.stringify(response);
        const url = 'http://localhost:3000/api/pelis/tmdb';
        let trespuesta = '<table>';
        for (var i = 0; i < response.results.length; i++) {
            trespuesta += `<tr><td>${response.results[i].original_title}</td>` ;
            trespuesta += `<td><form action="${url}/${response.results[i].id}" method="POST" >`;
            trespuesta += `<input type="hidden" id="tmdb_id" name="tmdb_id" value="${response.results[i].id}" />`;
            trespuesta += `<input type="submit" id="submit" name="submit" value="Grabar" />`;

            trespuesta += `</form></td>` ;
            trespuesta += `</tr>`;
        }
        trespuesta += '</table>';
        


        // mostrar resultados
        document.getElementById("app").innerHTML = trespuesta;


    })
    .catch(err => console.error(err));

}