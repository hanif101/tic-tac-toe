//
const { checker } = require('./checker')
const { patchData } = require('../game-profile/game-update-data')
const { updateGame, startGame } = require('../main/helper')
const { winner } = require('./ui')
let turn
const inputs = {
	playerO: [],
	playerX: [],
	result: [],
	value: null,
	Xmoves: 0,
	Omoves: 0,
}
function setPlayer(num) {
	turn = parseInt(num)
}

const playGame = (e) => {
	let id = parseInt(e.target.id)

	if (inputs.playerX.includes(id) || inputs.playerO.includes(id)) {
		// console.log(err)
	} else {
		if (turn === 0) {
			inputs.playerO.push(id)
			$(e.target).text('O')
			turn = 1
			inputs.value = 'o'
			inputs.Omoves += 1
		} else {
			inputs.playerX.push(id)
			$(e.target).text('X')
			turn = 0
			inputs.value = 'x'
			inputs.Xmoves += 1
		}
	}

	// if playerX wins
	if (inputs.playerX.length > 2) {
		checker(inputs.playerX, inputs.result)
	}
	// if playerO wins
	if (inputs.playerO.length > 2) {
		checker(inputs.playerO, inputs.result)
	}

	// if any wins, print result
	if (inputs.result.length) {
		// console.log(inputs)

		$('#winner-box').html(winner(`player ${inputs.value} won!`))
		$('#gamebox').removeClass('gamebox')
	}
	// if its tie
	else if (
		(inputs.playerX.length === 5 || inputs.playerO.length === 5) &&
		inputs.result.length === 0
	) {
		$('#winner-box').html(winner('Its tie'))
	}

	// console.log(inputs)
	let data = patchData(inputs)
	updateGame(e, data)
}

module.exports = {
	playGame,
	inputs,
	setPlayer,
}
