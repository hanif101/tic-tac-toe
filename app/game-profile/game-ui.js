//
const store = require('../store')
const { clearInputs } = require('../main/checker')
const main = require('../main/main')

// Create new game
const createNewGameSuccess = (response) => {
	console.log(main.inputs)
	store.game = response.game
	let cells = response.game.cells

	cells.forEach((cell, index) => {
		$(`#${index + 1}`).text(cell)
		$(`#${index + 1}`).css('color', 'black')
	})

	clearInputs(inputs)
	$('.row-cols-3').on('click', playGame)
}

module.exports = {
	createNewGameSuccess,
}
