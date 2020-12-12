// setup for auth
const express = require("express");
const passport = require('passport');
const cookieParser = require('cookie-parser');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const cors = require('cors')
const cookieSession = require('cookie-session');

// module in express that allows session tracking
// this gives you data access to the user
const session = require('express-session');
require('./passport-setup');

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware for authentication

app.use(cookieSession({
  name: 'home-management-session',
  keys: ['key1', 'key2']
}))

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize()); // initializes auth process
// app.use(passport.session()); // tells to use sessions to auth
// need to have an endpoint at my local server to tell the front end whether the user is logged in

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// we want to return the user data
app.get('/userInfo', (req, res) => {
  console.log("==========88============")
  console.log(req)
  res.send(JSON.stringify({}))
});

app.get('/failed', (req, res) => res.send("You failed to log in!"))

// app.get('/good', determineIfUserIsLoggedIn, (req, res) => res.redirect("https://home-management-app.herokuapp.com/"))

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // !! is not not req.user, common way to check if req.user exists
    const isLoggedIn = !!req.user;
    // Successful authentication, redirect home.
    if (isLoggedIn) {
      res.redirect("http://localhost:3000")
    } else {
      res.sendStatus(401);
    }
  });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
