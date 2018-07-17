'use strict'

const config = require('../config')

const uploadFile = function (formData) {
  console.log('data in uploadFile is ', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    data: formData,
    processData: false,
    contentType: false
  })
}

const deleteFile = function (data) {
  console.log('data in deleteFile is ', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/uploads/' + data.upload.id,
    data: data
  })
}

module.exports = {
  uploadFile,
  deleteFile
}
