const mongoose = require("mongoose");

const embassySchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Embassy = mongoose.model("Embassy", embassySchema);

module.exports = Embassy;
