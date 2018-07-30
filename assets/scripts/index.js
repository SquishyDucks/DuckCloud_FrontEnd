'use strict'

const authEvents = require('./auth/events')
const uploadEvents = require('./upload/events')
const sort = require('./upload/sort')
// const viewEvents = require('./upload/view')

$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  $('#multipart-form-data').on('submit', uploadEvents.onCreateUpload)
  $('#update-upload-form').on('submit', uploadEvents.onUpdateUpload)
  $('.delete').on('submit', uploadEvents.onDelete)

  $('#file-list').on('click', '.edit-btn', uploadEvents.onMakeEditable)
  $('#file-list').on('click', '.update-btn', uploadEvents.onUpdateUpload2)
  $('#file-list').on('click', '.delete-btn', uploadEvents.onClickDelete)

  $('#delete-button').on('click', uploadEvents.onDeleteUpload)

  $('#viewOwn').on('click', uploadEvents.onViewOwn)
  $('#viewAll').on('click', uploadEvents.onViewAll)

  $('#table-heading').on('click', sort.onSortTitle)
  $('#date-created-heading').on('click', sort.onSortDateCreated)
  $('#date-modified-heading').on('click', sort.onSortDateModified)
  $('#tags-heading').on('click', sort.onSortTags)
})
