//
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('../game/ui')
//Sign-un
const signUp = (e) => {
	e.preventDefault()

	const form = e.target
	const signUpFormData = getFormFields(form)
	// console.log(signUpFormData)

	api
		.signUpApi(signUpFormData)
		.then(ui.signUpSuccess)
		.catch(ui.singUpFail)
}

//Sign-in
const signIn = (e) => {
	e.preventDefault()

	const form = e.target
	const signInFormData = getFormFields(form)
	// console.log(signInFormData)

	api
		.signInApi(signInFormData)
		.then(ui.signInSuccess)
		.catch(ui.signInFail)
}

//Sign-out
const signOut = (e) => {
	e.preventDefault()

	api.signOutApi().then(ui.signOutSuccess).catch(ui.signOutFail)
}

module.exports = {
	signUp,
	signIn,
	// changePassword,
	signOut,
}
