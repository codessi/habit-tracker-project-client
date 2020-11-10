'use strict'

const config = require('./../config')
const store = require('./../store')

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

module.exports = {
  activityCreate,
  indexActivity
}
