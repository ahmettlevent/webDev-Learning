import { Requests } from "./requests";
import { UI } from "./ui";

// Elements
const form = document.getElementById("employee-form")
const name = document.getElementById("name")
const department = document.getElementById("department")
const salary = document.getElementById("salary")


// Event Listeners
eventListeners()

function eventListeners(e) {

}

// Objects
const request = new Requests()
const ui = new UI()


request.post()