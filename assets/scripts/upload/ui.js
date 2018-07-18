'use strict'
const store = require('../store')
const showFilesTemplate = require('../templates/file_row.handlebars')

const checkFileOwnership = function (data) {
  console.log('data is ', data)
  console.log('data-owner is ', data.getAttribute('data-owner'))
  if (data.getAttribute('data-owner') === '') {
    data.querySelectorAll('.clickable').forEach((x) => { x.classList.add('hide') })
    // data.querySelector('delete-btn').classList.add('hide')
  } else if (data.getAttribute('data-owner') === store.user._id) {
  } else {
    data.querySelectorAll('.clickable').forEach((x) => { x.classList.add('hide') })
    // data.querySelector('delete-btn').classList.add('hide')
  }
  // debugger
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
  console.log('filesCreated is ', filesCreated)
  // converts htmlCollection into array
  const arr = Array.prototype.slice.call(filesCreated)
  console.log('arr is ', arr)
  arr.forEach(function (x) {
    console.log('x is ', x)
    checkFileOwnership(x)
  })
}

const uploadFileSuccess = function (uploadFileResponse) {
  console.log('uploadFileResponse is ', uploadFileResponse)
}

const uploadFileFail = function (error) {
  console.log('uploadFileFail is ', error)
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

module.exports = {
  uploadFileSuccess,
  uploadFileFail,
  getUploadsSuccess,
  getUploadsFail,
  updateUploadSuccess,
  updateUploadFail,
  createFileTable
}
