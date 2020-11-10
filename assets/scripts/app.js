'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const auth = require('./auth/events')
const apps = require('./apps/events')
// const ui = require('./ui-off')

$(() => {
  $('#sign-up-form').on('submit', auth.onSignUp)
  $('#sign-up-form').hide()
  $('#sign-in-form').on('submit', auth.onSignIn)
  // $('#sign-in-form').hide()
  $('#cover').hide()
  $('#change-password-form').hide()
  $('#change-password-form').on('submit', auth.onPasswordChange)

  $('#sign-out-form').on('submit', auth.onSignOut)
  $('#sign-out-form').hide()
  // $('#yes').on('click', trackLog)
  $('#habit-input').on('click', apps.onCreatActivity)
  $('#hi-five').on('click', apps.onIndexActivity)
})


