// External dependencies
const express = require('express');
const router = express.Router();

// Do you give permission page routing
router.post('/*/action/permission', function (req, res) {
  // Set a variable to the answer
  var answer = req.session.data['give-permission'];
  // Set prototype version
  var version = req.params[0];

  // Check whether the answer is Yes, I give my permission
  if (answer == "Yes, I give my permission"){
    // Send user to next page
    res.redirect(`/${version}/check-your-answers`)
  }
  else {
    // Send user to a confirm permission page
    res.redirect(`/${version}/no-permission-given`)
  }

})

// Confirm if you do not give permission page routing
router.post('/*/action/permission-confirm', function (req, res) {
  // Set a variable to the answer
  var answer = req.session.data['give-permission-confirm'];
  // Set prototype version
  var version = req.params[0];

  // Check whether the answer is I want to give my permission
  if (answer == "I want to give my permission"){
    // Send user to next page
    res.redirect(`/${version}/do-you-give-permission`)
  }
  else {
    // Send user to enter a screen out page
    res.redirect(`/${version}/no-permission-given`)
  }

})


module.exports = router;
