'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')

const onSignUp = function (event) {

  event.preventDefault()
  console.log('onSignUp is firing')
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
  //   .then(ui.signUpSuccess)

  //   .catch(ui.signUpFail)
}

module.exports = {
  onSignUp
}