'use strict'
const store = require('../store')
const uploadUi = require('../upload/ui.js')
const uploadAPI = require('../upload/api.js')

const signInSuccess = function (signInResponse) {
  $('.butter input').val('')
  store.user = signInResponse.user
  store.viewState = 'viewAll'
  $('#viewAll').hide(200)
  $('#sign-in-form').hide(500)
  $('#sign-up-form').hide(500)
  $('.content').show(500)
  $('#sign-out-button').show(500)
  $('#change-password-form').show(500)
  $('.navbar-text').html('Signed in as ' + signInResponse.user.email)
  $('.app-name-h1').hide(500)
  $('.navbar-brand').show(500)
  uploadAPI.getUploads()
    .then((data) => uploadUi.createFileTable(data))
}
// uploadUi.createFileTable(data)

const signInFail = function () {
  $('.butter input').val('')
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
  $('.butter input').val('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Signed up successfully!</strong> Now login with your email and password.
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signUpFail = function () {
  $('.butter input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign up failed!</strong> Please try again.
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signUpFailPW = function () {
  $('.butter input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign up failed!</strong> Your password and password confirmation do not match.
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.butter input').val('')
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
  $('.butter input').val('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Change password failed</strong> Please try again.
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signOutSuccess = function (signOutResponse) {
  $('.butter input').val('')
  $('#sign-in-form').show(500)
  $('#sign-up-form').show(500)
  $('.content').hide(500)
  $('#sign-out-button').hide(500)
  $('#change-password-form').hide(500)
  $('.app-name-h1').show(500)
  $('.navbar-brand').hide(500)
  $('.navbar-text').html('')
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>You have logged out!</strong>
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
}

const signOutFail = function () {
  // console.log('signOutFail is ', error)
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Failed to log out.</strong>
    </div>
    `)
  $('.alert').delay(2500).fadeOut()
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
