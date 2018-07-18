'use strict'
const store = require('../store')

const signInSuccess = function (signInResponse) {
  $('#sign-in-form input').val('')
  store.user = signInResponse.user
  $('#sign-in-form').hide(1000)
  $('#sign-up-form').hide(1000)
  $('.content').show(1000)
  $('#sign-out-button').show(1000)
  $('#change-password-form').show(1000)
}

const signInFail = function () {
  $('#sign-in-form input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign in failed!</strong> Please make sure you typed in your credentials correctly.
    </div>
`)
  $('.alert').delay(2500).fadeOut()
}

const signUpSuccess = function (signUpResponse) {
  $('.alerts').html('')
  $('#sign-up-form input').val('')
  $('#sign-up-form').hide(1000)
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Signed up successfully!</strong> Now login with your email and password.
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signUpFail = function () {
  $('#sign-up-form input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign up failed!</strong> This email address have been taken, please use another email address
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signUpFailPW = function () {
  $('#sign-up-form input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign up failed!</strong> Your password does not math your password password confirmation
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#change-password-form input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Password updated successfully</strong>
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const changePasswordFail = function () {
  $('#change-password-form input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Change password failed</strong> Incorrect current password.
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signOutSuccess = function (signOutResponse) {
  $('#sign-in-form input').val('')
  $('#sign-in-form').show(1000)
  $('#sign-up-form').show(1000)
  $('.content').hide(1000)
  $('#sign-out-button').hide(1000)
  $('#change-password-form').hide(1000)
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>You have logged out!</strong>
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signOutFail = function (error) {
  console.log('signOutFail is ', error)
}

module.exports = {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  signUpFailPW
}
