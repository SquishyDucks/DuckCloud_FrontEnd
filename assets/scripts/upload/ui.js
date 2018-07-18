'use strict'
const store = require('../store')
const showFilesTemplate = require('../templates/file_row.handlebars')

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
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign in failed!</strong> Please make sure you typed in your credentials correctly.
    </div>
`)
}

const uploadFileFail = function () {
  $('.alerts').html('')
  $('.alerts').html(`
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Sign in failed!</strong> Please make sure you typed in your credentials correctly.
    </div>
`)
}

const getUploadsSuccess = function (getUploadsResponse) {
  console.log('getUploadsResponse is ', getUploadsResponse)
  createFileTable(getUploadsResponse)
}

const getUploadsFail = function (error) {
  console.log('getUploadsFail is ', error)
}

const updateUploadSuccess = function (updateUploadResponse) {
  console.log('updateUploadResponse is ', updateUploadResponse)
}

const updateUploadFail = function (error) {
  console.log('updateUploadFail is ', error)
}

const deleteSuccess = function () {

}

const deleteFail = function () {

}

module.exports = {
  uploadFileSuccess,
  uploadFileFail,
  getUploadsSuccess,
  getUploadsFail,
  updateUploadSuccess,
  updateUploadFail,
  deleteSuccess,
  deleteFail,
  createFileTable
}
