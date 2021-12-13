const inputs = {
	playerO: [],
	playerX: [],
	result: [],
	value: null,
	Xmoves: 0,
	Omoves: 0,
	turn: null,
}

function clearInputs(inputs) {
	inputs.playerO = []
	inputs.playerX = []
	inputs.result = []
	inputs.Xmoves = 0
	inputs.Omoves = 0
	inputs.value = null
	inputs.turn = null
}

const checker = (array, result) => {
	let winCondition = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	]

	for (let condition of winCondition) {
		if (condition.every((num) => array.includes(num))) {
			result.push(condition)
		}
	}
}

const indexValueOver = (el) => {
	let over = (el) => {
		if (el.result.length) {
			return true
		} else if (
			(el.playerX.length === 5 || el.playerO.length === 5) &&
			el.result.length === 0
		) {
			return true
		} else {
			return false
		}
	}

	let data = {
		game: {
			cell: {
				index:
					el.value === 'x'
						? el.playerX[el.Xmoves - 1] - 1
						: el.playerO[el.Omoves - 1] - 1,
				value: el.value,
			},

			over: over(el),
		},
	}

	return data
}

// function checkWinner(obj) {
// 	if (obj.result) {
// 		if (obj.value === 'o') {
// 			return 'X'
// 		} else if (obj.value === 'x') {
// 			return 'O'
// 		}
// 	}
// }

const play = (e, inputs, checker, helper) => {
	let id = parseInt(e.target.id)

	if (inputs.playerX.includes(id) || inputs.playerO.includes(id)) {
		// console.log(err)
	} else {
		if (inputs.turn === 0) {
			inputs.playerO.push(id)
			$(e.target).text('O')
			inputs.turn = 1
			inputs.value = 'o'
			inputs.Omoves += 1
		} else {
			inputs.playerX.push(id)
			$(e.target).text('X')
			inputs.turn = 0
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
		// drop click
		helper.printWinner(inputs.value)
		helper.changeWinnerBG(inputs.result)
		helper.showNewGameButton()
	}
	// if its tie
	else if (
		(inputs.playerX.length === 5 || inputs.playerO.length === 5) &&
		inputs.result.length === 0
	) {
		helper.printTie()
		helper.showNewGameButton()
	}
}

module.exports = {
	inputs,
	clearInputs,
	checker,
	indexValueOver,
	play,
}
