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

module.exports = {
  signUp
}