//
const URL = require('../config')
const store = require('../store')

//Sign Up
export const signUpApi = (data) => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/sign-up',
		data,
	})
}

//Sign In
export const signInApi = (data) => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/sign-in',
		data,
	})
}
//Sign Out
export const signOutApi = () => {
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
