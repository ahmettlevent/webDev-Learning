// // readyState 	Holds the status of the XMLHttpRequest.
// // 0: request not initialized
// // 1: server connection established
// // 2: request received
// // 3: processing request
// // 4: request finished and response is ready 

// // status 	Returns the status-number of a request
// // 200: "OK"
// // 403: "Forbidden"
// // 404: "Not Found"

// const button = document.querySelector("#btn")

// eventlisteners()


// function eventlisteners() {
//   button.addEventListener("click", button_submit)
// }


// function button_submit(e) {
//   const xml = new XMLHttpRequest()

//   xml.open("GET", "ahmet.txt", true)
//   xml.send()

//   xml.onload = function logtext() {
//     // xml.response text is the text we get
//     console.log(xml.responseText);
//   }
// }


const button = document.querySelector("#button")
const table_body = document.querySelector("#table-body")

eventListeners()

function eventListeners(e) {
  button.addEventListener("click", run)
}

function run(e) {
  const xml = new XMLHttpRequest()


  xml.onload = function () {
    const objects = JSON.parse(xml.responseText)
    let content = ``
    for (const item of objects) {
      content += `
        <tr>
          <td>${item.isim}</td>
          <td>${item.departman}</td>
          <td>${item.maas}</td>
        </tr>
                              `
    }
    table_body.innerHTML=content

  }


  xml.open("GET", "ahmet.json", true)
  xml.send()


  e.preventDefault()

}








