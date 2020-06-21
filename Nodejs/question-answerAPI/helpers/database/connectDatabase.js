const mongoose = require("mongoose");

connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
    .then(() => { console.log("MongoDB Connection Succesfull") })
    .catch(err => {
      console.log(err)
    })

}

module.exports = connectDatabase