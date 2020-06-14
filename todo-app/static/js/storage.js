class StorageAccess {
    static addLocalStorage(film) {
        let films = []

        if (localStorage.getItem("filmler")) {
            films = JSON.parse(localStorage.getItem("filmler"))
            films.push({ "MovieName": film.MovieName, "MovieDirector": film.MovieDirector, MovieLink: film.MovieLink })
        } else {
            films.push(film)
        }

        localStorage.setItem("filmler", JSON.stringify(films))
    }

    static getFromLocalStorage() {
        let myarray = JSON.parse(localStorage.getItem("filmler"))
        return myarray
    }

    static removeToDo(selectedfilmName,selectedfilmDirector,selectedfilmLink) {
        const allFilms = StorageAccess.getFromLocalStorage()

        for (const film in allFilms) {
          if (selectedfilmName == allFilms[film].MovieName && selectedfilmDirector == allFilms[film].MovieDirector && selectedfilmLink == allFilms[film].MovieLink){
              allFilms.splice(film,1)
    
          }
        }
        localStorage.setItem("filmler",JSON.stringify(allFilms))

    }
}