const URL = require('../config')
const store = require('../store')

//Sign Up
const signUpApi = (data) => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/sign-up',
		data,
	})
}

//Sign In
const signInApi = (data) => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/sign-in',
		data,
	})
}
//Sign Out
const signOutApi = () => {
	return $.ajax({
		method: 'DELETE',
		url: URL.apiUrl + `/sign-out`,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

//Change Password
// export const changePasswordApi = function (data) {
// 	return $.ajax({
// 		method: 'PATCH',
// 		url: URL + '/change-password',
// 		data,
// 		headers: {
// 			Authorization: 'Bearer ' + store.user.token,
// 		},
// 	})
// }

module.exports = {
	signInApi,
	signUpApi,
	// changePassword,
	signOutApi,
}
