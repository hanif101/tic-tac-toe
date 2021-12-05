const store = require('../store')
const URL = require('../config')

//
// GET - get all game
const getGamesApi = () => {
	return $.ajax({
		method: 'GET',
		url: URL.apiUrl + '/games',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// GET - get specific game
const getSpecGameApi = () => {
	// need game id
	let id = '603e5ebcc7f56d0017c9818e'

	return $.ajax({
		method: 'GET',
		url: URL.apiUrl + '/games/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// POST - create new game
const createNewGameApi = () => {
	return $.ajax({
		method: 'POST',
		url: URL.apiUrl + '/games',
		data: {},
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// PATCH - update game
const updateGameApi = (data) => {
	let gameid = store.game._id
	return $.ajax({
		method: 'PATCH',
		url: URL.apiUrl + '/games/' + gameid,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
		data: data,
	})
}

module.exports = {
	getGamesApi,
	getSpecGameApi,
	createNewGameApi,
	updateGameApi,
}
