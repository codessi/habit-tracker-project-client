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

// arrange array newest on top 
const indexActivitySuccess = function (response) {
  store = response
  console.log(store)
  document.getElementById('index').innerHTML =""
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
// const indexActivitySuccess = function (response) {
//   console.log(response)
//   store = response
//   console.log(store)
//   // let lastLog = response.habits[response.habits.length-1]
//   const index = response.habits
//   // $('#log-display').html(`${JSON.stringify(lastLog)}`)
//   // response.habits.forEach(item => $('#index').html(item.name))
//   const allIndex = index.map(myFunction)
//   console.log(index)
//   allIndex.reverse()
//   function myFunction (item) {
//     // document.getElementById("index").innerHTML += item.name + "<br>"
//     // $('#index').HTML += item.name + "<br>"
//     const date = new Date(item.createdAt)
//     const answer = () => {
//       if (item.achieve === true) {
//         return 'yes'
//       } else {
//         return 'No'
//       }
//     }
//     document.getElementById('index').innerHTML += ' Activity: ' + item.name + ' Achieved: ' + answer() + ' on ' + date.toDateString() + '<br>'

//   // $('#activity').html(`${lastLog.name}`)
//   }
// }



module.exports = {
  activityCreateSuccess,
  indexActivitySuccess
}
