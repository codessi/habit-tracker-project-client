'use strict'

let store = require('./../store')

const activityCreateSuccess = function (response) {
  store.habit = response.habit
  const date = new Date(response.habit.createdAt)
  // $('#display-date').html(`Date: ${date.toDateString()}`)
  const answer = () => {
    if (response.habit.achieve === true) {
      return 'yes'
    } else {
      return 'No'
    }
  }
  $('#display-activity').html(`Activity: ${response.habit.name}`)
  $('#display-achievement').html(`Achieved: ${answer()}`)
  $('#display-area').show()
  $('#hi-five').show()
  $('#habit-name').val('')
  $('#display-date').html(`Date: ${date.toDateString()}`)
  $('#message2').html('Create Activity Successful')
  
  // let createHtml = (`
  // <span> Activity: ${response.habit.name}</span>
  // `)
}
const activityCreateFail = function (response) {
  $('#message2').html('Sorry, Create Activity Unsuccessful')
  // $('#message').delay(1000).fadeOut('slow')
}

// arrange array newest on top
const indexActivitySuccess = function (response) {
  store = response
  document.getElementById('index').innerHTML = ''
  // $('#habit-input').hide()
  $('#delete-update').show()
  $('#sign-out-form').show()
  $('#habit-name').val('')
  $('#message2').show()
  $('#sign-out-form').show()
  $('#activity-inqury').show()
  $('#delete-form').show()
  $('#display-area').show()
  $('#update-form').show()
  $('#index').show()

  const index = response.habits
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
  $('#update-form')[0].reset()
  $('#message2').html('Activity Update Successful')
}
const activityUpdateFail = function (response) {
  $('#update-form')[0].reset()
  $('#message2').html('Sorry, Activity Update Unsuccessful')
}

const deleteOneSuccess = function (response) {
  $('#message2').html('Delete successfully.')
  $('#delete-form')[0].reset()
}
const deleteOneFail = function (response) {
  $('#message2').html('Delete is not successful.')
  $('#delete-form')[0].reset()
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
