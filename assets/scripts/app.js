'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const auth = require('./authorization')

$(() => {
 $('#sign-up-form').on('submit', auth.onSignUp)
 $('#sign-in-form').hide()
 $('#cover').hide()
})

