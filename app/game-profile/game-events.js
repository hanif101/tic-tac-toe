const gameUI = require('./game-ui')
const gameAUTH = require('./game-api')
const {
	inputs,
	checker,
	play,
	indexValueOver,
	clearInputs,
} = require('../helpers/playstore')
const helper = require('../helpers/ui-helper')

// GET
// const allGames = (e) => {
// 	e.preventDefault()

// 	gameApi
// 		.getGamesApi()
// 		.then(gameUI.getALLGames)
// 		.catch((err) => console.log(err))
// }

// // GET - get specific game
// // const getSpecGame = (e) => {
// // 	e.preventDefault()
// // 	gameApi
// // 		.getSpecGameApi(e)
// // 		.then(gameui.getSpecGameSuccess)
// // 		.catch((err) => console.log(err))
// // }

// POST - Create new game
const create = (e) => {
	e.preventDefault()

	gameAUTH
		.createAPI()
		.then(gameUI.createSuccess)
		.catch(gameUI.createFail)
}

const update = (e, data) => {
	e.preventDefault()
	gameAUTH
		.updateAPI(data)
		.then((res) => console.log('game update success', res))
		.catch((err) => console.log('game update error', res))
}

// **************************************************************************************
const choosePlayer = (e) => {
	inputs.turn = Number(e.target.id)
	helper.loadGameHtml()
	create(e)
}

const gameStart = (e) => {
	// console.log(inputs)
	play(e, inputs, checker, helper)
	update(e, indexValueOver(inputs))
}

const resetBoard = (e) => {
	helper.resetBoard()
	clearInputs(inputs)
	create(e)
}
module.exports = {
	// getGames,
	// getSpecGame,
	create,
	// updateGame,
	gameStart,
	choosePlayer,
	resetBoard,
}
