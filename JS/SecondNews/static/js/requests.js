const xml2json = new XmlConverter()

class Requests {
  constructor() {
    this.url = "https://rss.haberler.com/rss.asp?kategori="
  }
  async get(category) {
    const res = await fetch(this.url + category)
    const str = await res.text()
    const data = new window.DOMParser().parseFromString(str, "text/xml")

    return data

  }
}