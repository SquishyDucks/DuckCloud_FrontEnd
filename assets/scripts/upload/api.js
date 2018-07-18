'use strict'

const config = require('../config')
const store = require('../store')

const uploadFile = function (formData) {
  formData.append('upload[owner]', store.user._id)
  // for (const pair of formData.entries()) {
  //   console.log(pair[0] + ', ' + pair[1])
  //   console.log('formData.file is ', formData.file)
  // }

  // new Response(formData).text().then(console.log)

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

const getUpload = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/uploads/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateUpload = function (data) {
  console.log('updateUpload in api.js data is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/uploads/' + data.id,
    data: {
      title: data.title,
      tags: data.tags
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteFile = function (data) {
  console.log('data in deleteFile is ', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/uploads/' + data,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  uploadFile,
  getUploads,
  updateUpload,
  deleteFile,
  getUpload
}
