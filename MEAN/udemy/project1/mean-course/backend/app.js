const express = require("express");
const bodyParser = require('body-parser');

const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fasdfrtasdf",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "fdgsdfgsfgsd",
      title: "Second server-sid post",
      content: "This is also coming from the server"
    }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully!",
    posts: posts
  });
});


// app.use((req, res, next) => {
//   res.send('Hello from express!');
// });


module.exports = app;
