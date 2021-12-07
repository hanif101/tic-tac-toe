//

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

function clearInputs(inputs) {
	inputs.playerO = []
	inputs.playerX = []
	inputs.result = []
	inputs.Xmoves = 0
	inputs.Omoves = 0
	inputs.value = null
}

module.exports = {
	checker,
	clearInputs,
}
