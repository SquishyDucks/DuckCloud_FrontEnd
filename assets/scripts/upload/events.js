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

module.exports = {
  onCreateUpload,
  onDelete
}
