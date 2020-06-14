const film_table_body = document.querySelector("#film-table-body")

class UI {
    static addFilmTOUI(film) {
        film_table_body.innerHTML += `
        <tr>
            <td><img id="movie-image" src="${film.MovieLink}"></img></td>
            <td>${film.MovieName}</td>
            <td>${film.MovieDirector}</td>
            <td><button class="remove-film">Filmi Çıkar</button></td>
        </tr>`

    }

    static LoadAllFilms(films) {
        for (const film in films) {
            UI.prototype.addFilmTOUI(films[film])
        }

    }
}
