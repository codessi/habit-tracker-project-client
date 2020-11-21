'use strict'

let apiUrl
const apiUrls = {
  // console.log('apiUrl is firing ')
  production: 'https://shrouded-plateau-44826.herokuapp.com',
  development: 'http://localhost:4741'
}
// const apiUrls = {
//   production: '<replace-with-heroku-url>',
//   development: 'http://localhost:4741'
// }

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
  console.log('apiUrl is firing ')
} else {
  apiUrl = apiUrls.production
 
}

module.exports = {
  apiUrl
}
