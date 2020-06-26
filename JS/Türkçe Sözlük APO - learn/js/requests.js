class Requests {
  async get(word) {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${word}`)

    return response.text()
  }
}