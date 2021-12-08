//
const { checker } = require('./checker')
const { patchData } = require('../game-profile/game-update-data')
const { updateGame, startGame } = require('../main/helper')

var turn = null

const inputs = {
	playerO: [],
	playerX: [],
	result: [],
	value: null,
	Xmoves: 0,
	Omoves: 0,
}
const setPlayer = (e) => {
	if (e.target.id === 1) {
		turn = 1
	} else if (e.target.id === 0) {
		turn = 0
	}
}

const playGame = (e) => {
	// console.log(e.target.id)
	let id = parseInt(e.target.id)

	if (inputs.playerX.includes(id) || inputs.playerO.includes(id)) {
		// throw new Error
		return
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
		$('#gamebox').removeClass('gamebox')
		// console.log(inputs.result, inputs)
		for (let win of inputs.result) {
			win.forEach((id) => {
				$(`#${id}`).css('color', 'red')
			})
		}
	}
	// if its tie
	else if (
		(inputs.playerX.length === 5 || inputs.playerO.length === 5) &&
		inputs.result.length === 0
	) {
		console.log('It is a tie')
	}

	// console.log(inputs)
	let data = patchData(inputs)
	// console.log(data)
	updateGame(e, data)
}

module.exports = {
	playGame,
	inputs,
	turn,
	setPlayer,
}
