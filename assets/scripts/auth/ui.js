'use strict'

const store = require('./../store')

const signInSuccess = function (response) {
  // $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
  store.user = response.user
  $('#habit-input').show()
  console.log('signin success finrgi')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

module.exports = {
  signInSuccess
}
