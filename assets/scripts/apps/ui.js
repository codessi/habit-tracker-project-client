'use strict'

let store = require('./../store')

const activityCreateSuccess = function (response) {
  store.habit = response.habit
  const date = new Date(response.habit.createdAt)
  const answer = () => {
    if (response.habit.achieve === true) {
      return 'yes'
    } else {
      return 'No'
    }
  }
  console.log('activityCreatesuccess ' + response)
  $('#display-activity').html(`Activity: ${response.habit.name}`)
  $('#display-achievement').html(`Achieved: ${answer()}`)
  $('#hi-five').show()
  $('#display-date').html(`Date: ${date.toDateString()}`)
  console.log(response.habit.createdAt)
  // let createHtml = (`
  // <span> Activity: ${response.habit.name}</span>
  // `)
}
const activityCreateFail = function (response) {
  $('#message').html('Sorry, Create Activity Unsuccessful')
  // $('#message').delay(1000).fadeOut('slow')
}

// arrange array newest on top
const indexActivitySuccess = function (response) {
  store = response
  console.log(store)
  document.getElementById('index').innerHTML = ''
  $('#habit-input').hide()
  $('#delete-update').show()
  $('#sign-out-form').show()

  const index = response.habits
  console.log(index[0])

  console.log(index.reverse()[0])
  index.map(myFunction)
  // $('#index').html(toHTML)
  function myFunction (item) {
    const date = new Date(item.createdAt)
    const answer = () => {
      if (item.achieve === true) {
        return 'Yes'
      } else {
        return 'No'
      }
    }
    document.getElementById('index').innerHTML += ' Activity: ' +
    item.name + ' Achieved: ' + answer() + ' on ' +
  date.toDateString() + '<br>' + ' ID ' + item._id + '<br>'
  }
}

const indexActivityFail = function (response) {
  $('#message2').html('Display Failed')
}

const activityUpdateSuccess = function (response) {
  store.game = response.game
  
}
const activityUpdateFail = function (response) {
  $('#message2').html('Display Failed')
}

const deleteOneSuccess = function (response) {
  $('#message2').html('Delete successfully.')
}
const deleteOneFail = function (response) {
  console.log('deleteOneFail is firing ')
  $('#message2').html('Delete is not successful.')
}

module.exports = {
  activityCreateSuccess,
  activityCreateFail,
  indexActivitySuccess,
  indexActivityFail,
  activityUpdateSuccess,
  activityUpdateFail,
  deleteOneSuccess,
  deleteOneFail

}
