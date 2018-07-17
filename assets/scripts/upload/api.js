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

module.exports = {
  uploadFile
}
