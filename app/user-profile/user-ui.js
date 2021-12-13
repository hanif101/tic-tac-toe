const store = require('../store')
const Modal = require('bootstrap').Modal
const signINmodal = new Modal($('#sign-in-modal'))
const signUPmodal = new Modal($('#sign-up-modal'))
const uiHelper = require('../helpers/ui-helper')
const { inputs, clearInputs } = require('../helpers/playstore')

//Sign up
const signupSuccess = (res) => {
	signUPmodal.hide()
	uiHelper.whenSIGNUPsuccess(res.user.email)
}
const signupFail = (err) => {
	uiHelper.whenSIGNUPfail()
}

//Sign in
const signinSuccess = (res) => {
	signINmodal.hide()
	uiHelper.whenSIGNINsuccess(res.user.email)
	store.user = res.user
}
const signinFail = (err) => {
	uiHelper.whenSIGNINfail()
}

// // Sign out
const signoutSuccess = () => {
	clearInputs(inputs)
	console.log('sign out successfull')
	uiHelper.whenSIGNOUTsuccess()
}

const signoutFail = (err) => {
	console.log('sign out error:::', err.responseJSON.message)
	uiHelper.whenSIGNOUTfail()
}
module.exports = {
	signupSuccess,
	signupFail,
	signinSuccess,
	signinFail,
	signoutSuccess,
	signoutFail,
}
