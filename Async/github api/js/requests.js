class GithubRequest {
  constructor() {
    this.token = "yourTokenHERE"
    this.url = "https://api.github.com/users/"
  }
  async get(username) {
    let data = await fetch(this.url + username, {
      method: "GET",
      // if you have token un-comment lines below
      // headers:{
      //   "Authorization": this.token
      // }
    })
    return data.text()
  }
}
