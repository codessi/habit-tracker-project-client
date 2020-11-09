'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const auth = require('./authorization')
// move it later
const config = require('./config')
const store = require('./store')
const ui = require('./ui')

$(() => {
  $('#sign-up-form').on('submit', auth.onSignUp)
  $('#sign-up-form').hide()
  $('#sign-in-form').on('submit', auth.onSignIn)
  //  $('#sign-in-form').hide()
  $('#cover').hide()
  $('#change-password-form').hide()
  $('#change-password-form').on('submit', auth.onPasswordChange)

  $('#sign-out-form').on('submit', auth.onSignOut)
  $('#sign-out-form').hide()
  // $('#yes').on('click', trackLog)
  $('#habit-input').on('click',onCreatActivity)
  $('#hi-five').on('click', onIndexActivity)
})

// event.js
let activity = 'run'
let achievement = false
let data


// console.log(data)
function onCreatActivity (e) {
  e.preventDefault()

  // console.log(document.getElementById('habit-name').value)
  activity = $('#habit-name').val()
  console.log(activity)
  
  // console.log('onCreatActivity is firing')
  achievement = e.target.value
  console.log(achievement)
  data = {
    habit: {
      achieve: achievement,
      name: activity
    }
  }
  activityCreate(data)
    .then(ui.activityCreateSuccess)
    // .then (() => {indexActivity()})
    // .then(ui.indexActivitySuccess)
}

function onIndexActivity (e){
  e.preventDefault()
  indexActivity()
    .then(ui.indexActivitySuccess)

}
// let data = {
//   habit: {
//     achieve: achievement,
//     name: activity
//   }
// }
// indexActivity()

// const indexLog = function (){

// }

// api.js
const indexActivity = function (data) {
  return $.ajax({
    url: config.apiUrl + '/habits',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

const activityCreate = function (data) {
// console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/habits',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}
