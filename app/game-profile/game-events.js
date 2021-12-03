//
const ui = require('./game-ui')
const api = require('./game-api')

// GET game
const getGames = (e) => {
	e.preventDefault()

	api
		.getGamesApi()
		.then((response) => console.log(response))
		.catch((err) => console.log('error'))
}

// GET specific game
const getSpecGame = (e) => {
	e.preventDefault()
	console.log('hanif')

	api
		.getSpecGameApi()
		.then((response) => console.log(response))
		.catch((err) => console.log(err))
}

module.exports = {
	getGames,
	getSpecGame,
}
