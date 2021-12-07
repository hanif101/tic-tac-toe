//
const store = require('../store')
const { clearInputs } = require('../main/checker')
const { inputs } = require('../main/play')
const ui = require('../main/ui')

// Create new game
const createNewGameSuccess = (response) => {
	store.game = response.game
	let cells = response.game.cells

	cells.forEach((cell, index) => {
		$(`#${index + 1}`).text(cell)
		$(`#${index + 1}`).css('color', 'black')
	})

	clearInputs(inputs)
	$('#gamebox').addClass('gamebox')
}

// Get Games
const getAllGames = (response) => {
	console.log(response)
	let last5games = response.games.splice(response.games.length - 4, 4)

	last5games.forEach((game) => {
		let div = `
		<div id="last" class="row row-cols-3">
		<div id = "1" class="one">${game.cells[0]}</div>
		<div id = "2" class="one">${game.cells[1]}</div>
		<div id = "3" class="one">${game.cells[2]}</div>
		<div id = "4" class="one">${game.cells[3]}</div>
		<div id = "5" class="one">${game.cells[4]}</div>
		<div id = "6" class="one">${game.cells[5]}</div>
		<div id = "7" class="one">${game.cells[6]}</div>
		<div id = "8" class="one">${game.cells[7]}</div>
		<div id = "9" class="one">${game.cells[8]}</div>
	</div>`
		$('#lastdiv').append(div)
	})

	$('#history-header').removeClass('d-none')
}

module.exports = {
	createNewGameSuccess,
	getAllGames,
}
