class UI {

  constructor() {
    // Json OBJ
    this.countryPaths = {
      "en": "./img/en.svg", "tr": "./img/tr.png", "fr": "./img/fr.png"
    }

  }

  getText(textArea){
    return textArea.value
  }

  getCountry(selectCountry) {
    return selectCountry.options[selectCountry.selectedIndex].value;
  }

  changeCountry(selecCountry,countryImage) {
    let newLang = selecCountry.options[selecCountry.selectedIndex].value;
    countryImage.src = this.countryPaths[newLang]
  }

  changeResult(resultArea,data){
    resultArea.innerHTML = JSON.parse(data).text
  }


}