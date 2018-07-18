'use strict'
const store = require('../store')

const signInSuccess = function (signInResponse) {
  console.log('I have successfully signed in!')
  store.user = signInResponse.user
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('.content').show()
  $('#sign-out-button').show()
  $('#change-password-form').show()
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
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('.content').hide()
  $('#sign-out-button').hide()
  $('#change-password-form').hide()

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
