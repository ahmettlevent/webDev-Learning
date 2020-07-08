class UI {

  constructor() {

  }


  newNews(data, result_ul) {
    result_ul.innerHTML = ""




    data.forEach(item => {
      const li = `
      <li class="result-list-item">
        <h2 class="title">

          <a target="_blank" href="${item.quid}">
            ${item.title} 
          </a>
        
        </h2>
        
          <h4 class="description">
          ${item.description}
        </h4>

        <h6 class="pub-date">
          ${item.pubDate}
        </h6>
      </li>`

      result_ul.innerHTML += li

    })

  }
}