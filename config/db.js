const mongoose = require("mongoose");

mongoose.connect(
  process.env[
    "mongodb+srv://ezeangeloni:<31018934Mea@>@cluster0.kuzgavr.mongodb.net/?retryWrites=true&w=majority"
  ],
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB!");
  console.log(db.readyState); // Agregamos el console.log aquí
});

module.exports = db;
