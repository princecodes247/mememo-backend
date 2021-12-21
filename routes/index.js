const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const User = require("../models/User");
const Meme = require("../models/Meme");




// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.json("welcome"));




// Fetch top memes Page
router.get("/memes", (req, res) => {
    const { 
      skip = 0, 
      limit = 10,
      categories = [], 
      tags = [], 
      owner = "",

    } = req.query

    Meme.find().then(memes => {
      res.json(memes)
    })
});

// Search for memes
router.get("/memes", (req, res) => {
    const { 
      skip = 0, 
      limit = 10,
      categories = [], 
      tags = [], 
      owner = "",

    } = req.query

    Meme.find().then(memes => {
      res.json(memes)
    })
});



// Add a meme to db
router.get("/meme/create", (req, res) => {
    let newMeme = new Meme({
      owner: "me",
      title: "first",
      img: "124", 
      tags: [],
      categories: [],
    }).save().then((meme) => {
      console.log("create")
      res.json(meme)
    })

});

// Update a meme
router.get("/meme/update", (req, res) => {
  Meme.findById("61c22f973d459e17002ce2ca").then(meme => {
    meme.title = meme.title + "o"

    meme.save().then((meme) => {
      console.log("updated")
      res.json(meme)
    })
  })
});

// Like a meme
router.get("/meme/like", (req, res) => {
     Meme.findOne().then(meme => {
      let id = "id"
      !meme.likes.includes(id) ? meme.likes.push(id) : meme.likes.splice(meme.likes.indexOf(id))

    meme.save().then((meme) => {
      console.log("like")
      res.json(meme)
    })
  })
});

// Comment on a meme
router.get("/meme/comment", (req, res) => {
  Meme.findOne().then(meme => {
    let comment = {
      owner: "me",
      body: "qwr"
    }
    meme.comments.push(comment)

    meme.save().then((meme) => {
      console.log("comment")
      res.json(meme)
    })
  })
});

// Delete a meme from db
router.get("/meme/delete", (req, res) => {
  Meme.findByIdAndDelete("61c22f973d459e17002ce2ca", () => {
    console.log("Meme deleted")
  })
});



// Dashboard
router.get("/user", ensureAuthenticated, (req, res) =>
  {
    console.log({user: req.user})
  }
);

router.get("/login", forwardAuthenticated, (req, res) => res.redirect("/users/login"));
router.get("/register", forwardAuthenticated, (req, res) => res.redirect("/users/register"));
router.get("/signup", forwardAuthenticated, (req, res) => res.redirect("/users/register"));



//404
// router.get("/*", (req, res) => res.render("404"));

module.exports = router;
