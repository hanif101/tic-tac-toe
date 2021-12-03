// export const checker = (playerX, playerO, winCondition) => {
// 	let result = []
// 	// check if any condition is true
// 	let check = (array) => {
// 		for (let condition of winCondition) {
// 			if (condition.every((num) => array.includes(num))) {
// 				result.push(condition)
// 			}
// 		}
// 	}

// 	// if playerX wins
// 	if (playerX.length > 2) {
// 		check(playerX)
// 	}
// 	// if playerO wins
// 	if (playerO.length > 2) {
// 		check(playerO)
// 	}

// 	// if any wins, print result
// 	if (result.length) {
// 		console.log('Win')
// 		$('.row-cols-3').off('click')
// 		// console.log(result)
// 		for (let win of result) {
// 			win.forEach((id) => {
// 				$(`#${id}`).css('color', 'red')
// 			})
// 		}
// 	}
// 	// if its tie
// 	else if (
// 		(playerX.length === 5 || playerO.length === 5) &&
// 		result.length === 0
// 	) {
// 		console.log('It is a tie')
// 	}
// }
