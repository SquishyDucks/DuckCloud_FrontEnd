'use strict'

const authEvents = require('./auth/events')
const uploadEvents = require('./upload/events')

$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  $('#multipart-form-data').on('submit', uploadEvents.onCreateUpload)
  $('#get-uploads-form').on('submit', uploadEvents.onGetUploads)
  $('#update-upload-form').on('submit', uploadEvents.onUpdateUpload)
})
