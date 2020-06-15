class Requests {
  constructor() {
    this.xhr = new XMLHttpRequest()
  }


  get(url, callback) {
    this.xhr.open("GET", url, true)

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(this.xhr.responseText)
      } else {
        console.log("olmadı bayım");

      }
    }
    this.xhr.send()

  }


  post(url, data, callback) {
    this.xhr.open("POST", url, true)

    this.xhr.setRequestHeader("Content-type", "application/json")

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(this.xhr.responseText)
      }
    }

    this.xhr.send(JSON.stringify(data))

  }

  delete(url, callback) {
    this.xhr.open("DELETE", url); // Bağlantıyı Açtık

    this.xhr.onload = () => {
      // console.log(this);
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText); // İsteğimiz bitti
      } else {
        // Hata Durumu
        callback("DELETE Request'e göre hata oluştu", null);
      }
    };
    this.xhr.send();
  }

}

const request = new Requests()

request.get("https://jsonplaceholder.typicode.com/posts", function (data) {
  console.log(data)
})



data = {
  "userId": 155,
  "id": 102,
  "title": "at nam consequatur ea labore ea harum",
  "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
}

request.post("https://jsonplaceholder.typicode.com/albums", data, function (response) {
  console.log(response)
})




request.delete("https://jsonplaceholder.typicode.com/albums/1", function(err, response){
    if (err === null){
        // Başarılı
        console.log(response);        
    } else {
        console.log(err);
    }
});