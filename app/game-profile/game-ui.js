const store = require('../store')

//new game
const createSuccess = (response) => {
	console.log('game create success', response)
	store.game = response.game
}

const createFail = (response) => {
	console.log('game create fail', response)
}

module.exports = {
	createSuccess,
	createFail,
}
