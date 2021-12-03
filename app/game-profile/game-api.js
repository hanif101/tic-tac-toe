const store = require('../store')
const URL = require('../config')

// GET game
const getGamesApi = () => {
	return $.ajax({
		method: 'GET',
		url: URL.apiUrl + '/games',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

//GET specific game
const getSpecGameApi = () => {
	let id = '603e5ebcc7f56d0017c9818e'

	return $.ajax({
		method: 'GET',
		url: URL.apiUrl + '/games/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

//POST game
const postGameApi = () => {
	let id = '603e5ebcc7f56d0017c9818e'

	return $.ajax({
		method: 'GET',
		url: URL.apiUrl + '/games/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

module.exports = {
	getGamesApi,
	getSpecGameApi,
}
