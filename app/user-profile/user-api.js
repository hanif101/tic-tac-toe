//
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
	console.log(store.user.token)
	return $.ajax({
		method: 'DELETE',
		url: URL.apiUrl + `/sign-out`,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// module.export = {
// 	signUp,
// }
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
