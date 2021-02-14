const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        key: "key01",
        title: "title01",
        subtitle: "subtitle01",
        authors: "authors01",
        description: "description01",
        image: "image01",
        link: "link01"
    },
    {
        key: "key02",
        title: "title02",
        subtitle: "subtitle02",
        authors: "authors02",
        description: "description02",
        image: "image02",
        link: "link02"
    },
    {
        key: "key03",
        title: "title03",
        subtitle: "subtitle03",
        authors: "authors03",
        description: "description03",
        image: "image03",
        link: "link03"
    },
    {
        key: "key04",
        title: "title04",
        subtitle: "subtitle04",
        authors: "authors04",
        description: "description04",
        image: "image04",
        link: "link04"
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
