'use strict'
// require
// const config = require('./config')
// const store = require('./store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// initial declaration
let activity = 'run'
let achievement = false
let data

// console.log(data)
function onCreatActivity (e) {
  e.preventDefault()

  // console.log(document.getElementById('habit-name').value)
  activity = $('#habit-name').val()

  // console.log('onCreatActivity is firing')
  achievement = e.target.value
  console.log(achievement)
  data = {
    habit: {
      achieve: achievement,
      name: activity
    }
  }
  api.activityCreate(data)
    .then(ui.activityCreateSuccess)
    .catch(ui.activityCreateFail)
    // .then (() => {indexActivity()})
    // .then(ui.indexActivitySuccess)
}
function onDeleteOne (e) {
  e.preventDefault()
  console.log('onDeleteOne is firing')
  // let data = e.target.value
  // console.log(e.target)
  // const form = e.target
  // const data = getFormFields(form)
  let data = $('#id').val()
  console.log($('#id').val())
  // console.log(data)
  api.deleteOne(data)
    .then(ui.deleteOneSuccess)
    .catch(ui.deleteOneFail)
}

function onIndexActivity (e) {
  e.preventDefault()
  $('#sign-out-form').show()
  api.indexActivity()
    .then(ui.indexActivitySuccess)
    .catch(ui.indexActivityFail)
}

function onUpdate (e) {
  e.preventDefault()
  console.log('onUpdate is fireing')
  const form = e.target
  const data = getFormFields(form)
  console.log(data)
  api.update(data)
    .then(ui.activityUpdateSuccess)
    .catch(ui.activityUpdateFail)
}

module.exports = {
  onCreatActivity,
  onIndexActivity,
  onDeleteOne,
  onUpdate
}
