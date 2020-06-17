class GithubRequest {
  constructor() {
    this.token = "yourTokenHERE"
    this.url = "https://api.github.com/users/"
  }
  async get(username) {
    const data = await fetch(this.url + username, {
      method: "GET",
      // if you have token un-comment lines below

      // headers:{
      //   "Authorization": this.token
      // }
    })

    const responseData = await data.json()
    
    return responseData
  }
}
