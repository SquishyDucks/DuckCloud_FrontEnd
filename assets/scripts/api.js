'use strict'

const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  console.log('data in API is ', data)
  return $.ajax({
    method: 'POST',
    header: 'Content-Type: application/json',
    url: 'http://localhost:4741/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('data in API is ', data)
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut
}
