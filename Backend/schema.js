let mong = require("mongoose");
let schema = mong.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
});

module.exports = mong.model("persons", schema);
