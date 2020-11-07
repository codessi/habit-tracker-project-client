const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('sign up is firing')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log('sign In is firing')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE',
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}