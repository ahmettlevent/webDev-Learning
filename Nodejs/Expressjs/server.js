const express = require("express");
const { accessControl } = require("./middleware")

const users = [
  {
    id: 1, name: "ahmet levent", place: "istanbul"
  },

  {
    id: 1, name: "ahmet levent", place: "istanbul"
  }
]

const app = express();
const PORT = 5000;

app.use(express.json());
// Get Request
app.get("/users", accessControl, (req, res, next) => {
  res.json(users)
})

app.post("/users", (req, res, next) => {
  console.log(req.body)

  const user = req.body;

  users.push(user)

  res.json({
    success: true,
    data: users
  })
})

app.listen(PORT, () => {
  console.log("server started" + PORT)
})