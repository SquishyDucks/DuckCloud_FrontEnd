const getFormFields = require('../../../lib/get-form-fields')
const authUi = require('./ui.js')
const authApi = require('./api.js')
// const store = require('./store.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is ', data)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    authUi.signUpFailPW()
  } else {
    authApi.signUp(data)
      .then(authUi.signUpSuccess)
      .catch(authUi.signUpFail)
  }
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.passwords.old === data.passwords.new) {
    $('#change-password-form input').val('')
    $('.alerts').html('')
    $('.alerts').html(`
      <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>New password must not match old password</strong>
      </div>
      `)
    $('.alert').delay(2500).fadeOut()
    return
  }

  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signoutFail)
}

module.exports = {
  onSignIn: onSignIn,
  onSignUp: onSignUp,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword
}
