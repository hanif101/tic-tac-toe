const patchData = (el) => {
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

module.exports = {
	patchData,
}
