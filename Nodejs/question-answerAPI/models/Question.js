const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title can't be empty"],
    minlength: [10, "Title can be min 10"],
    unique: true
  },
  content: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [10, "Title can be min 10"],

  },
  sluq: { type: String },
  createdAt: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User"
  }
});

QuestionSchema.pre("save", function (next) {

})

QuestionSchema.methods.makeSluq = function () {
  return slugify(this.title, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })
}

module.exports = mongoose.model("Question", QuestionSchema);