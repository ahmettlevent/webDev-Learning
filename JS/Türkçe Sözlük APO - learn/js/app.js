const search_input = document.getElementById("search")

eventListeners()

const ui = new UI()
const requests = new Requests()

function eventListeners(e) {
  search_input.addEventListener("input", searchWord)
}


function searchWord(e) {
  const word = ui.getWord(search_input)

  requests.get(word)
    .then(value => dataHandler(JSON.parse(value), word))
}


function dataHandler(data, word) {
  !errorCheck(data) ? changeResult(data) : recommendWord(data, word);
}


// data Handlers
function changeResult(data) {
  data.forEach(anlam => {
    anlam.anlamlarListe.forEach(anlamlar => console.log(anlamlar))
  });

}

function recommendWord(data, word) {

}


//  Validator's
function errorCheck(data) {
  return (data.error) ? true : false
}

function dataCheck(data) {
  return (data) ? true : false

}