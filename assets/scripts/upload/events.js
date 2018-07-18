const uploadUi = require('./ui.js')
const uploadApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateUpload = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')
  const formData = new FormData(event.target)
  console.log('onUpload formData is ', formData)

  uploadApi.uploadFile(formData)
    .then(uploadUi.uploadFileSuccess)
    .catch(uploadUi.uploadFileFail)
}

const onDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  uploadApi.deleteFile(data)
    .then()
    .catch()
}

const onGetUploads = function (event) {
  event.preventDefault()
  console.log('The get uploads button does something!')

  uploadApi.getUploads()
    .then(uploadUi.getUploadsSuccess)
    .catch(uploadUi.getUploadsFail)
}

const updateUploadObject = {
  'upload': {
    'title': '',
    'tags': ''
  }
}

const onUpdateUpload = function (event) {
  event.preventDefault()
  console.log('The update uploads form does something!')
  const data = getFormFields(event.target)

  uploadApi.updateUpload(data)
    .then(uploadUi.updateUploadSuccess)
    .catch(uploadUi.updateUploadFail)
}

module.exports = {
  onCreateUpload,
  onGetUploads,
  onUpdateUpload,
  onDelete
}
