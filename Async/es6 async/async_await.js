async function getDATA() {
  const response = await fetch("https://api.exchangeratesapi.io/latest")
  const data = await response.json()
  return data


}

getDATA()
  .then(response => {
    if (response.error) console.log("Link Yüklenemedi");
    else console.log(response);
  })
  .catch(err=>console.log("Hata Oluştu"))