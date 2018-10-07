const passport = require('passport'), 
      FacebookStrategy = require('passport-facebook').Strategy;
const FACEBOOK_APP_ID = '242070186466893',
      FACEBOOK_APP_SECRET = 'adfa28d818c0c7f8d8d94dc938557462';

passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8000/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('done');
        done(null, user);
    }
));