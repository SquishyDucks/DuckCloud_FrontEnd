'use strict'

const showFilesTemplate = require('../templates/file_row.handlebars')

const createFileTable = function (data) {
  // console.log('data inside createFileTable is ', data)
  const showFilesHtml = showFilesTemplate({ uploads: data.uploads })
  // console.log('showFilesHtml is ', showFilesHtml)
  $('#file-table-body').html(showFilesHtml)
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
