// SELECTORS
const countryImg = document.querySelector("#country-img")
const selectCountry = document.querySelector("#selectCountry")
const textArea = document.querySelector("#textarea")
const resultArea = document.querySelector("#result-p")

const ui = new UI()
const requests = new TranstlateRequest()

// Call From Start Funcs
changeCountry()

// Event Listeners's
eventListeners()

function eventListeners() {
  selectCountry.addEventListener("change", changeCountry)
  textArea.addEventListener("input", search)
}

// Func's
function changeCountry(e) {
  ui.changeCountry(selectCountry, countryImg)
  search()
}

function search(e) {
  let language = ui.getCountry(selectCountry)
  let text = ui.getText(textArea)
  
  if (text.length > 0) {
    requests.get(language, text)
      .then(data => ui.changeResult(resultArea, data))
      .catch(err => console.log("hata"))
  }
}
