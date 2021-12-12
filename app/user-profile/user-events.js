const getFormFields = require('../../lib/get-form-fields')
const userAUTH = require('./user-api')
const userUI = require('./user-ui')

//sign-up
const signUP = (e) => {
	e.preventDefault()
	const form = e.target
	const signupFormData = getFormFields(form)

	userAUTH
		.signupAPI(signupFormData)
		.then(userUI.signupSuccess)
		.catch(userUI.signupFail)
}

// Sign-in
const signIN = (e) => {
	e.preventDefault()

	const form = e.target
	const signInFormData = getFormFields(form)

	userAUTH
		.signinAPI(signInFormData)
		.then(userUI.signinSuccess)
		.catch(userUI.signinFail)
}

//Sign-out
const signOUT = (e) => {
	e.preventDefault()

	userAUTH
		.signoutAPI()
		.then(userUI.signoutSuccess)
		.catch(userUI.signoutFail)
}

module.exports = {
	signUP,
	signIN,
	signOUT,
}
