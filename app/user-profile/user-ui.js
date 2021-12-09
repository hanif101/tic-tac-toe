const store = require('../store')
const Modal = require('bootstrap').Modal
const signInModal = new Modal($('#signin'))
const signUpModal = new Modal($('#signup'))
const helper = require('../main/helper')
const { clearInputs } = require('../main/checker')
const { inputs } = require('../main/play')

//Sign up
const signUpSuccess = (res) => {
	signUpModal.hide()
	helper.whenSignUpSubmitted()
}
const signUpFail = (err) => {
	$('#sign-up-error').removeClass('d-none')
	setTimeout(() => {
		$('#sign-up-error').addClass('d-none')
	}, 2000)
}

//Sign in
const signInSuccess = (res) => {
	signInModal.hide()
	helper.whenSignInSubmitted()

	store.user = res.user
}
const signInFail = (err) => {
	$('#sign-in-error').removeClass('d-none')
	setTimeout(() => {
		$('#sign-in-error').addClass('d-none')
	}, 2000)
}

// Sign out
const signOutSuccess = () => {
	clearInputs(inputs)
	console.log('sign out successfull')
}

const signOutFail = (err) => {
	console.log('sign out error:::', err.responseJSON.message)
}
module.exports = {
	signUpSuccess,
	signUpFail,
	signInSuccess,
	signInFail,
	signOutSuccess,
	signOutFail,
}
