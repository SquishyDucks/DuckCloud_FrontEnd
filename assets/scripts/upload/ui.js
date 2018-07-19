'use strict'
const store = require('../store')
const showFilesTemplate = require('../templates/file_row.handlebars')
const api = require('./api.js')

const checkFileOwnership = function (data) {
  // console.log('data is ', data)
  // console.log('data-owner is ', data.getAttribute('data-owner'))
  // check if data-owner attribute has empty value
  if (data.getAttribute('data-owner') === '') {
    data.querySelectorAll('.editable-btn').forEach((x) => { x.classList.add('hide') })
    // check if data-owner matches current user id
  } else if (data.getAttribute('data-owner') === store.user._id) {
  } else {
    data.querySelectorAll('.editable-btn').forEach((x) => { x.classList.add('hide') })
  }
}

const createFileTable = function (data) {
  // console.log('data inside createFileTable is ', data)
  // generate a table row for each file using handlebars
  const showFilesHtml = showFilesTemplate({ uploads: data.uploads })
  // console.log('showFilesHtml is ', showFilesHtml)
  // add the generated table rows inside the table body element
  $('#file-table-body').html(showFilesHtml)
  // find all table row elements using class 'file-row'
  const filesCreated = document.getElementsByClassName('file-row')
  // console.log('filesCreated is ', filesCreated)
  // converts htmlCollection into array
  const arr = Array.prototype.slice.call(filesCreated)
  // console.log('arr is ', arr)
  // iterate over array, pass each row as value into checkFileOwnership
  arr.forEach(function (x) {
    // console.log('x is ', x)
    checkFileOwnership(x)
  })
}

const uploadFileSuccess = function (uploadFileResponse) {
  api.getUploads()
    .then((data) => createFileTable(data))
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>File Uploaded</strong>
    </div>
`)
  $('.alert').delay(2500).fadeOut()
  $('#multipart-form-data input').val('')
}

const uploadFileFail = function () {
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Uh Oh!</strong> An error has happened! Please try uploading the file again.
    </div>
`)
  $('#multipart-form-data input').val('')
}

const updateUploadSuccess = function (updateUploadResponse) {
  api.getUploads()
    .then((data) => createFileTable(data))
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      Item updated successfully!
    </div>
  `)
  $('.alert').delay(2500).fadeOut()
}

const updateUploadFail = function () {
}

const deleteUploadSuccess = function (deleteUploadResponse) {
  api.getUploads()
    .then((data) => createFileTable(data))
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      Item deleted successfully!
    </div>
  `)
  $('.alert').delay(2500).fadeOut()
}

const deleteUploadFail = function () {
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      Error! Please try delete again.
    </div>
  `)
  $('.alert').delay(2500).fadeOut()
}

module.exports = {
  uploadFileSuccess,
  checkFileOwnership,
  createFileTable,
  uploadFileFail,
  updateUploadSuccess,
  updateUploadFail,
  deleteUploadSuccess,
  deleteUploadFail
}
