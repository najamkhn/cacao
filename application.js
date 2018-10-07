'use strict';

const express = require('express');
const passport = require('passport');
const session = require("express-session"),
      bodyParser = require("body-parser");
const modules = {
    auth: require('./modules/auth/routes')
};
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = {
    initialize() {
        this.port = 3000;
        this.app = express();

        // Required for social setup
        this.passport = passport;
        this.FACEBOOK_APP_ID = '242070186466893';
        this.FACEBOOK_APP_SECRET = 'adfa28d818c0c7f8d8d94dc938557462';

    },

    warmup() {
        this.app.use(session({secret: "cats"}));
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(this.passport.initialize());
        this.app.use(this.passport.session());
        this.app.use('/auth', modules.auth);
    },

    warmupPlugins() {        
        this.passport.use(new FacebookStrategy({
            clientID: this.FACEBOOK_APP_ID,
            clientSecret: this.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:8000/auth/facebook/callback"
        }, (accessToken, refreshToken, profile, done) => {
            console.log('done');
            done(null, user);
        }));
    },

    start() {
        this.app.listen(this.port, () => console.log(`Listening on port ${this.port}!`));
    },

    get(value) {
        return this[value];
    }
};