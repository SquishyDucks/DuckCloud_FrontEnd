'use strict'

const uploadFileSuccess = function (uploadFileResponse) {
  console.log('uploadFileResponse is ', uploadFileResponse)
}

const uploadFileFail = function (error) {
  console.log('uploadFileFail is ', error)
}

module.exports = {
  uploadFileSuccess,
  uploadFileFail
}
