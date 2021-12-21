const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const User = require("../models/User");
const Meme = require("../models/Meme");




// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

// Fetch top memes Page
router.get("/memes", ensureAuthenticated, (req, res) => {
    console.log("sss")
});

// Fetch top memes Page
router.get("/memes/:categories", ensureAuthenticated, (req, res) => {
    console.log("sss")
});

// Add a meme to db
router.post("/meme/add", ensureAuthenticated, (req, res) => {

});

// Update a meme
router.post("/meme/update", ensureAuthenticated, (req, res) => {

});

// Like a meme
router.post("/meme/like", ensureAuthenticated, (req, res) => {

});

// Comment on a meme
router.post("/meme/comment", ensureAuthenticated, (req, res) => {

});

// Delete a meme from db
router.delete("/meme/delete", ensureAuthenticated, (req, res) => {

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
