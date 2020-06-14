const form = document.querySelector("#film-form")

const remove_bt = document.querySelector(".remove-film")

const name_element = document.querySelector("#name")
const director_element = document.querySelector("#director")
const link_element = document.querySelector("#link")

const cardbody = document.querySelector("#film-table-body")

// UI OBJECT START
const ui = new UI();
// EVENT LISTENERS
eventlisteners()

function eventlisteners() {
  form.addEventListener("submit", addFilm)
  document.addEventListener("DOMContentLoaded", getFilms)
  cardbody.addEventListener("click", removeFilm)
  // PointerEvent.
}

function addFilm(params) {
  const name = name_element.value
  const director = director_element.value
  const link = link_element.value
  if (name === "" || director === "" || link === "") {
    // ERROR MESSAGE
  }
  else {
    const film = new Movie(name, director, link)
    UI.addFilmTOUI(film)
    StorageAccess.addLocalStorage(film)
  }
  params.preventDefault()
}

function removeFilm(e) {
  if (e.target.className == "remove-film") {

    const selectedfilmName = e.target.parentNode.parentNode.children[1].textContent
    const selectedfilmDirector = e.target.parentNode.parentNode.children[2].textContent
    const selectedfilmLink = e.target.parentNode.parentNode.children[0].firstChild.attributes[1].value

    e.target.parentElement.parentElement.remove()

    StorageAccess.removeToDo(selectedfilmName, selectedfilmDirector, selectedfilmLink)

    e.preventDefault(false)
  }

}

function getFilms(params) {
  films = StorageAccess.getFromLocalStorage()
  UI.LoadAllFilms(films)
}