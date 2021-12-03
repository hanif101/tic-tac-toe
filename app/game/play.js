//
// import checker from './checker'
// let turn = 'player1' || 'player2'

let playerX = []
let playerO = []
let result = []
// let parentOfboxes = $('.row-cols-3')
let turn = 1

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

// let board = ['', '', '', '', '', '', '', '', '']
// check if any condition is true
let check = (array) => {
	for (let condition of winCondition) {
		if (condition.every((num) => array.includes(num))) {
			result.push(condition)
		}
	}
}

//
export const play = (e) => {
	let id = parseInt(e.target.id)

	if (playerX.includes(id) || playerO.includes(id)) {
		// throw new Error
		return
	} else {
		if (turn === 0) {
			playerO.push(id)
			$(e.target).text('O')
			turn = 1
		} else {
			playerX.push(id)
			$(e.target).text('X')
			turn = 0
		}
	}
	// console.log('player X', playerX)
	// console.log('player O', playerO)
	// checker(playerX, playerO, winCondition)

	// if playerX wins
	if (playerX.length > 2) {
		check(playerX)
	}
	// if playerO wins
	if (playerO.length > 2) {
		check(playerO)
	}

	// if any wins, print result
	if (result.length) {
		console.log('Win')
		$('.row-cols-3').off('click')
		console.log(result)
		for (let win of result) {
			win.forEach((ix) => {
				$(`#${ix}`).css('color', 'red')
			})
		}
	}
	// if its tie
	else if (
		(playerX.length === 5 || playerO.length === 5) &&
		result.length === 0
	) {
		console.log('It is a tie')
	}
}
