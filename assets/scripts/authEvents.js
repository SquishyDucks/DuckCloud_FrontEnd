const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./authUi.js')
const api = require('./api.js')
// const store = require('./store.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)

  api.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signoutFail)
}

module.exports = {
  onSignIn: onSignIn,
  onSignUp: onSignUp,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword
}
