//
const store = require('../store')
const { clearInputs } = require('../main/checker')
const { inputs } = require('../main/play')
const ui = require('../main/ui')

// Create new game
const createNewGameSuccess = (e, response) => {
	console.log(inputs)
	store.game = response.game
	let cells = response.game.cells

	cells.forEach((cell, index) => {
		$(`#${index + 1}`).text(cell)
		$(`#${index + 1}`).css('color', 'black')
	})

	clearInputs(inputs)
	$('#gamebox').addClass('gamebox')

	console.log(inputs)
}

// Get Games
const getAllGames = (response) => {
	let last5games = response.games.splice(response.games.length - 4, 4)
	let lastdiv = $('#lastdiv').children()
	$('#lastdiv').html('')
	last5games.forEach((game) => {
		if (game.over) {
			let div = `
				<div id="last"  class="row row-cols-3 text-center">
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
		} else {
			let div = `
				<div id="last" data-gameid=${game._id} class="row row-cols-3 clickable text-center">
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
		}
	})

	$('#history-header').removeClass('d-none')
	$('#history-header-l4g').removeClass('d-none')
}

const getSpecGameSuccess = (response) => {
	clearInputs(inputs)
	response.game.cells.forEach((cell, index) => {
		if (cell === 'x') {
			inputs.playerX.push(index + 1)
			inputs.Xmoves = inputs.playerX.length
		} else if (cell === 'o') {
			inputs.playerO.push(index + 1)
			inputs.Omoves = inputs.playerO.length
		}
	})

	inputs.value = inputs.playerX.length <= inputs.playerO ? 'x' : 'o'

	let div = ui.playSpecificGame(response.game)
	$('#gamediv').html(div)
	console.log(inputs)
}
module.exports = {
	createNewGameSuccess,
	getAllGames,
	getSpecGameSuccess,
}
