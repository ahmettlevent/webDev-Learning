export class Requests {
  constructor() {
  }

  async get(employee) {

  }

  async post(employee) {

    const response = await fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })

    const responseData = await response.json()

    return responseData
  }

}