const express = require("express")
const dotenv = require("dotenv")


// Environment Variables
dotenv.config({
  path: "./config/env/config.env"
});
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("hello question answer")
})





app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
})