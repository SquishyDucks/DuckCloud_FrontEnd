'use strict'
const store = require('./store')

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
}

const signInFail = function (error) {
  console.log('Error is ', error)
}

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}

const signUpFail = function (error) {
  console.log('signUpFail is ', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
}

const changePasswordFail = function (error) {
  console.log('changePasswordFail is ', error)
}

const signOutSuccess = function (signOutResponse) {
  console.log('signOutSuccess is ', signOutResponse)
}

const signOutFail = function (error) {
  console.log('signOutFail is ', error)
}

module.exports = {
  signInSuccess: signInSuccess,
  signInFail: signInFail,
  signUpSuccess: signUpSuccess,
  signUpFail: signUpFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFail: changePasswordFail,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail
}
