'use strict'

const uploadFileSuccess = function (uploadFileResponse) {
  console.log('uploadFileResponse is ', uploadFileResponse)
}

const uploadFileFail = function (error) {
  console.log('uploadFileFail is ', error)
}

const getUploadsSuccess = function (getUploadsResponse) {
  console.log('getUploadsResponse is ', getUploadsResponse)
}

const getUploadsFail = function (error) {
  console.log('getUploadsFail is ', error)
}

module.exports = {
  uploadFileSuccess,
  uploadFileFail,
  getUploadsSuccess,
  getUploadsFail
}
