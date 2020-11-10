'use strict'
// require
const config = require('./config')
const store = require('./store')

// initial declaration
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