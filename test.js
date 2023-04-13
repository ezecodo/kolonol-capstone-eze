const mongoose = require("mongoose");
const Embassy = require("./models/embassy.js");

mongoose.connect(
  process.env[
    "mongodb+srv://ezeangeloni:<31018934Mea@>@cluster0.kuzgavr.mongodb.net/?retryWrites=true&w=majority"
  ],
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB!");
  }
);

Embassy.find({}, (err, embassies) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Embassies:");
  console.log(embassies);

  mongoose.connection.close();
});
