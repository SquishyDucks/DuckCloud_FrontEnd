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

const onUpdateUpload = function (event) {
  event.preventDefault()
  console.log('The update uploads form does something!')
  const data = getFormFields(event.target)

  uploadApi.updateUpload(data)
    .then(uploadUi.updateUploadSuccess)
    .catch(uploadUi.updateUploadFail)
}

const onMakeEditable = function (event) {
  event.preventDefault()
  console.log('update button from file row was clicked')
  console.log('event.target is ', event.target)
  event.target.parentElement.parentElement.querySelectorAll('.file-table-cell-edit').forEach((x) => {
    x.removeAttribute('disabled')
    x.classList.remove('file-table-cell-inactive')
  })
  event.target.classList.add('hide')
  event.target.parentElement.parentElement.querySelector('.update-btn').classList.remove('hide')
}

module.exports = {
  onCreateUpload,
  onGetUploads,
  onUpdateUpload,
  onDelete,
  onMakeEditable
}
