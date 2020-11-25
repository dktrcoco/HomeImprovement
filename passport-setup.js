const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(user, done) {
     
      done(null, user);
  });

passport.use(new GoogleStrategy({
    clientID: "866996201638-31p7l3mo1vg2ra1552cua33hjo7fbc81.apps.googleusercontent.com",
    clientSecret: "QZDEt3vso8GrWYCGCfgu_jVJ",
    // url the user gets redirected to after logging in
    callbackURL: "http://localhost:3001/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // use the profile info (mainly profile id) to check if the user is registered in the db
      return done(null, profile);
    }
));