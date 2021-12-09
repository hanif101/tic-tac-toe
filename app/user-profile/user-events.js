const getFormFields = require('../../lib/get-form-fields')
const userApi = require('./user-api')
const userui = require('./user-ui')

//Sign-up
const signUp = (e) => {
	e.preventDefault()

	const form = e.target
	const signUpFormData = getFormFields(form)

	userApi
		.signUpApi(signUpFormData)
		.then(userui.signUpSuccess)
		.catch(userui.signUpFail)
}

// Sign-in
const signIn = (e) => {
	e.preventDefault()

	const form = e.target
	const signInFormData = getFormFields(form)

	userApi
		.signInApi(signInFormData)
		.then(userui.signInSuccess)
		.catch(userui.signInFail)
}

//Sign-out
const signOut = (e) => {
	e.preventDefault()

	userApi
		.signOutApi()
		.then(userui.signOutSuccess)
		.catch(userui.signOutFail)
}

module.exports = {
	signUp,
	signIn,
	signOut,
}
