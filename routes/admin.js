const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const User = require("../models/User");




// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.json("Admin"));

router.get("/stats", (req, res) => {
  User.countDocuments()
    .then(userCount => {

      res.json( {
        userCount
      })
    })
    .catch(err => console.log(err))
});

//User Quiz
router.get("/user/:username", (req, res) => {

  User.findOne({ username: req.params.username }).then((person) => {
    if (person) {
      res.render( {
        user: person,
      });
    } else {
      res.json("no such user");
    }
  })
    .catch(err => console.log(err))
});


//404
// router.get("/*", (req, res) => res.render("404"));

module.exports = router;
