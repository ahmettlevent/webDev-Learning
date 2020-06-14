// function getDATA(data) {

//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {

//       if (typeof data == "string") {
//         resolve("olumlu")
//       } else {
//         reject("olumsuz")
//       }

//     }, 50)
//   })
// }

// getDATA(12)
//   .then(response => console.log(response))
//   .catch(err => console.log(err))



// function addTwo(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === "number") {
//         resolve(number + 2)
//       }
//       else {
//         reject("Lütfen Sayı Giriniz")
//       }
//     }, 15);
//   })
// }

// addTwo("ali")
//   .then(response => {
//     console.log(response);
//     return response + 2;
//   })
//   .then(function (response2) {
//     console.log(response2)
//   })
//   .catch(err => {
//     console.log(err)
//   })




class Requests {

  get(url) {


    return new Promise((resolved, reject) => {

      fetch(url)
        .then(response => response.json())
        .then(data => resolved(data))
        .catch(err => reject(err))

    })
  }


  post(url, data) {
    return new Promise((resolved, reject) => {
      const fetchinit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
      fetch(url, fetchinit)
        .then(response => response.json())
        .then(data => resolved(data))
        .catch(err => reject(err))
    })
  }


  put(url, data) {
    return new Promise((resolved, reject) => {
      const fetchinit = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
      fetch(url, fetchinit)
        .then(response => response.json())
        .then(data => resolved(data))
        .catch(err => reject(err))
    })
  }


  delete(url) {
    return new Promise((resolved, reject) => {
      const fetchinit = {
        method: 'DELETE',
      }
      fetch(url, fetchinit)
        .then(response => "İşlem BAŞARILI")
        .then(data => resolved(data))
        .catch(err => reject(err))
    })
  }
}

const request = new Requests()
// let data;
// request.get("https://jsonplaceholder.typicode.com/todos")
//   .then(response => data = response)
//   .catch(err => console.log(err))

// request.post("https://jsonplaceholder.typicode.com/albums", { userID: 1, title: "mydata" })
//   .then(response => console.log(response))
//   .catch(console.log("olmadı başkanım"))

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userID: 1, title: "mydata" })
//   .then(response => console.log(response))
//   .catch(console.log("olmadı başkanım"))



request.delete("https://jsonplaceholder.typicode.com/albums/1", { userID: 1, title: "mydata" })
  .then(response => console.log(response))
  .catch(console.log("olmadı başkanım"))







