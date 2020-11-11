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

const deleteOne = function (data) {
  return $.ajax({
    url: config.apiUrl + '/habits/' + data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/habits/' + $('#update-id').val(),
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  activityCreate,
  indexActivity,
  deleteOne,
  update
}
