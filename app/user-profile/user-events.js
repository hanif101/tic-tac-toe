//
const getFormFields = require('../../lib/get-form-fields')
const userApi = require('./user-api')
const userui = require('./user-ui')
//Sign-up
const signUp = (e) => {
	e.preventDefault()

	const form = e.target
	const signUpFormData = getFormFields(form)
	// console.log(signUpFormData)

	userApi
		.signUpApi(signUpFormData)
		.then(userui.signUpSuccess)
		.catch(userui.singUpFail)
}

//Sign-in
const signIn = (e) => {
	e.preventDefault()

	const form = e.target
	const signInFormData = getFormFields(form)
	// console.log(signInFormData)

	userApi
		.signInApi(signInFormData)
		.then(userui.signInSuccess)
		.catch(userui.signInFail)
}

//Sign-out
const signOut = (e) => {
	e.preventDefault()

	userApi.signOutApi().then(ui.signOutSuccess).catch(ui.signOutFail)
}

module.exports = {
	signUp,
	signIn,
	// changePassword,
	signOut,
}
