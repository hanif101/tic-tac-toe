// const { inputs } = require('../main/main')
const gameui = require('./game-ui')
const gameApi = require('./game-api')

// GET - get all games
const getGames = (e) => {
	e.preventDefault()

	gameApi
		.getGamesApi()
		.then(gameui.getAllGames)
		.catch((err) => console.log(err))
}

// GET - get specific game
const getSpecGame = (e) => {
	e.preventDefault()

	api
		.getSpecGameApi()
		.then((response) => console.log(response))
		.catch((err) => console.log(err))
}

// POST - Create new game
const createNewGame = (e) => {
	e.preventDefault()

	gameApi
		.createNewGameApi()
		.then(gameui.createNewGameSuccess)
		.catch((err) => console.log(err))
}

//PATCH - Update current game
const updateGame = (e, data) => {
	e.preventDefault()
	gameApi
		.updateGameApi(data)
		.then((response) => console.log(response))
		.catch((err) => console.log(err))
}

module.exports = {
	getGames,
	getSpecGame,
	createNewGame,
	updateGame,
}
