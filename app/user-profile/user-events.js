//
const getFormFields = require('../../lib/get-form-fields')
const userApi = require('./user-api')
const userui = require('./user-ui')
const { createNewGame } = require('../game-profile/game-events')

//Sign-up
const signUp = (e) => {
	e.preventDefault()

	const form = e.target
	const signUpFormData = getFormFields(form)

	userApi
		.signUpApi(signUpFormData)
		.then(userui.signUpSuccess)
		.catch((err) => console.log(err))
}

// Sign-in
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

	userApi
		.signOutApi()
		.then()
		.catch((err) => console.log(err))
}

module.exports = {
	signUp,
	signIn,
	signOut,
}