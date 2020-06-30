const form = document.querySelector("#getnews")
const input = document.querySelector("#category")

// Event Handler
eventHandler()


function eventHandler(params) {
  form.addEventListener("input", newNews)
}

// Objects
const request = new Requests()
const ui = new UI()



// EventHandler Funcs
function newNews(e) {
  request.get(input.value)
    .then(data => dataParser(data))
    .then(items => itemsToUI(items))

}



// Helper Funcs

function itemsToUI(data) {
  data.forEach(item => {
    ui.setGuid(item.quid)
    ui.setDescription(item.description)
    ui.setTitle(item.title)
    ui.setLink(item.link)
    ui.setEnclosure(item.enclosure)
    ui.setPubDate(item.pubDate)

  })
}

function dataParser(data) {
  const RawNews = data.querySelectorAll("item");

  const NewsDetails = []

  RawNews.forEach(news => {
    NewsDetails.push({
      "quid": news.querySelector("guid").innerHTML,
      "description": news.querySelector("description").innerHTML,
      "title": news.querySelector("title").innerHTML,
      "link": news.querySelector("link").innerHTML,
      "enclosure": news.querySelector("enclosure").innerHTML,
      "pubDate": news.querySelector("pubDate").innerHTML
    })
  });
  return NewsDetails
}