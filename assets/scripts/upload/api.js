'use strict'

const config = require('../config')
const store = require('../store')

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

const getUploads = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/uploads',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  uploadFile,
  getUploads
}
