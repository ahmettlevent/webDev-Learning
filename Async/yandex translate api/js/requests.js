class TranstlateRequest {
  async get(lang, text) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481&text=${text}&lang=${lang}`

    const myresponse = await fetch(url)
    return myresponse.text();
  }

}
