'use strict'

const store = require('./../store')

const signInSuccess = function (response) {
  // $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
  store.user = response.user
  console.log(store)
}

module.exports = {
  signInSuccess
}
