const uploadUi = require('./ui.js')
const uploadApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store.js')

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
    .then(uploadUi.deleteSuccess)
    .catch(uploadUi.deleteFail)
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
  console.log('onUpdateUpload data is ', data)

  uploadApi.updateUpload(data)
    .then(uploadUi.updateUploadSuccess)
    .catch(uploadUi.updateUploadFail)
}

const onUpdateUpload2 = function (event) {
  event.preventDefault()
  console.log('Update button from file row was clicked')
  const data = {}
  data.id = event.target.parentElement.parentElement.getAttribute('data-id')
  data.title = event.target.parentElement.parentElement.querySelector('.file-title').value
  data.tags = event.target.parentElement.parentElement.querySelector('.file-tags').value
  console.log('onUpdateUpload2 data is ', data)
  uploadApi.updateUpload(data)
    .then(uploadUi.updateUploadSuccess)
    .catch(uploadUi.updateUploadFail)
}

const onMakeEditable = function (event) {
  event.preventDefault()
  console.log('Edit button from file row was clicked')
  // console.log('event.target is ', event.target)
  // find table cells with class '.file-table-cell-edit'
  event.target.parentElement.parentElement.querySelectorAll('.file-table-cell-edit').forEach((x) => {
    // remove the 'disabled' atribute to make input fields editable
    x.removeAttribute('disabled')
    // remove 'file-table-cell-inactive' class that made input fields look like table cells
    x.classList.remove('file-table-cell-inactive')
  })
  // hide the 'Edit' button
  event.target.classList.add('hide')
  // show the 'Update' button
  event.target.parentElement.parentElement.querySelector('.update-btn').classList.remove('hide')
}

module.exports = {
  onCreateUpload,
  onGetUploads,
  onUpdateUpload,
  onUpdateUpload2,
  onDelete,
  onMakeEditable
}
