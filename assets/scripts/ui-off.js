'use strict'

// const store = require('./store')

// const signInSuccess = function (response) {
//   // $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
//   store.user = response.user
//   console.log(store)

// }

// const activityCreateSuccess = function (response) {
//   store.habit = response.habit
//   const date = new Date(response.habit.createdAt)
//   const answer = () => {
//     if (response.habit.achieve === true) {
//       return 'yes'
//     } else {
//       return 'No'
//     }
//   }
//   console.log('activityCreatesuccess ' + response)
//   $('#display-activity').html(`Activity: ${response.habit.name}`)
//   $('#display-achievement').html(`Achieved: ${answer()}`)

//   $('#display-date').html(`Date: ${date.toDateString()}`)
//   console.log(response.habit.createdAt)
//   // let createHtml = (`
//   // <span> Activity: ${response.habit.name}</span>
//   // `)
// }

// const indexActivitySuccess = function (response) {
//   console.log(response)
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
//     document.getElementById('index').innerHTML +=' Activity: ' + item.name + ' Achieved: ' + answer() + ' on ' + date.toDateString() + '<br>'

//   // $('#activity').html(`${lastLog.name}`)
//   }
// }

// module.exports = {
//   signInSuccess,
//   activityCreateSuccess,
//   indexActivitySuccess
// }

/* // [{"_id":"5fa4a3b4de0b1136c11636ee","name":"johan","achieve":true,"owner":"5fa46a43def405170571871b","createdAt":"2020-11-06T01:15:32.888Z","updatedAt":"2020-11-06T01:15:32.888Z","__v":0},{"_id":"5fa4aea97a4b67374a2591f3","name":"johan","achieve":true,"owner":"5fa46a43def405170571871b","createdAt":"2020-11-06T02:02:17.947Z","updatedAt":"2020-11-06T02:02:17.947Z","__v":0},{"_id":"5fa4aeae7a4b67374a2591f4","name":"johan","achieve":true,"owner":"5fa46a43def405170571871b","createdAt":"2020-11-06T02:02:22.104Z","updatedAt":"2020-11-06T02:02:22.104Z","__v":0}, */