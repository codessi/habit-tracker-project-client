'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message2').html('Sign Up of ' + response.user.email + ' is successful! ')
  store.user = response.user
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('.center').hide()
  $('#sign-out-form').show()
  $('#message').delay(1000).fadeOut('slow')
  $('#sign-out-form').hide()
  $('#sign-up-form')[0].reset()
}
const signUpFail = function () {
  $('#message2').html('Sign Up failed,  try again')
  $('#sign-up-form')[0].reset()
  $('#message').delay(1000).fadeOut('slow')
  // $('#sign-up-form')[0].reset()
  
}

const signInSuccess = function (response) {
  $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
  store.user = response.user
  $('#activity-inqury').show()
  $('#change-password-link').show()
  $('.center').hide()
  $('#change-password-link').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#message').delay(1000).fadeOut('slow')
  $('#sign-in-form')[0].reset()
}
const signInFail = function (response) {
  $('#message').show()
  $('#message').html('Sign In failed,<br> sign up or<br>  try again')
  $('#message').delay(1000).fadeOut('slow')
  $('#sign-in-form')[0].reset()
}

const changePasswordSuccess = function (response) {
  $('#message').show()
  $('#message').html('Password Change Success')
  $('#message').delay(5000).fadeOut('slow')
  $('#sign-in-form').hide()
  $('#change-password-form').hide()

  // $('#sign-out-form').show()
  $('#change-password-form')[0].reset()
  $('#change-password-link').hide()
}

const changePasswordFail = function (response) {
  $('#message').show()
  $('#message').html('Password Change failed,  try again')
  $('#change-password-form')[0].reset()
  $('#sign-out-form').show()
}

const signOutSuccess = function () {
  $('#message').html('Sign Out Successful, <br> Good Bye!')
  $('#message').show()
  $('#sign-in-form').show()
  // $('#board').hide()
  $('#message2').hide()
  $('#sign-out-form').hide()
  $('#activity-inqury').hide()
  $('#delete-form').hide()
  $('#display-area').hide()
  $('#update-form').hide()
  $('#index').hide()
  $('#sign-in-form')[0].reset()
  $('#change-password-form').hide()
}

const signOutFail = function (response) {
  $('#message').html('Sign Out failed,  try again')
  $('#message').show()
  $('#sign-in-form').show()
  // $('#sign-out-form').hide()
  $('#sign-out-form').show()
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
