"user strict";
const form = document.querySelector("#getnews")
const input = document.querySelector("#category")

const result_ul = document.querySelector(".result-list")
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
  console.log(data);

  ui.newNews(data, result_ul)
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
      "pubDate": news.querySelector("pubDate").innerHTML
    })
  });
  return NewsDetails
}