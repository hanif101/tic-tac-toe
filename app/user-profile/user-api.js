const URL = require('../config')
const store = require('../store')

//Sign Up
const signupAPI = (data) => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/sign-up',
		data,
	})
}

//Sign In
const signinAPI = (data) => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/sign-in',
		data,
	})
}
//Sign Out
const signoutAPI = () => {
	return $.ajax({
		method: 'DELETE',
		url: URL.apiUrl + `/sign-out`,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

module.exports = {
	signinAPI,
	signupAPI,
	signoutAPI,
}
