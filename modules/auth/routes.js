const express = require('express');
const router = express.Router();
const passport = require('passport');

// middleware that is specific to this router
router.use((req, res, next) => { 
    console.log('Time: ', Date.now()); 
    next(); 
});

router.get('/ping', (req, res) => res.send('pinged!'));
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);
  
module.exports = router;