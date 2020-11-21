'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const appsEvents = require('./apps/events')
// const ui = require('./ui-off')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-up-form').hide()
  $('#sign-up-link').on('click', (e) => {
    e.preventDefault()
    $('#sign-up-form').show()
  })
  $('#change-password-link').hide()
  $('#change-password-link').on('click', (e) => {
    e.preventDefault()
    $('#change-password-form').show()
  })
  
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  // $('#sign-in-form').hide()
  $('#cover').hide()
  $('#change-password-form').hide()
  $('#change-password-form').on('submit', authEvents.onPasswordChange)

  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#sign-out-form').hide()
  // $('#yes').on('click', trackLog)
  $('#habit-input').on('click', appsEvents.onCreatActivity)
  $('#activity-inqury').hide()
  $('#hi-five').on('click', appsEvents.onIndexActivity)
  $('#hi-five').hide()
  $('#change-password-form').hide()
  $('#delete-form').on('submit', appsEvents.onDeleteOne)
  $('#update-form').on('submit', appsEvents.onUpdate)
  // $('#update-btn').on('click', appsEvents.onUpdate)
  $('#delete-update').hide()
})


