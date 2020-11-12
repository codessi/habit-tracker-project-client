'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {

  event.preventDefault()
  console.log('onSignUp is firing')
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {

  event.preventDefault()
  console.log('onSignIn is firing')
  const form = event.target

  const data = getFormFields(form)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFail)
}

const onPasswordChange = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    // .then(() => location.reload())
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onPasswordChange,
  onSignOut
}
