// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const game = require('./main/main')
// const { playBackEnd } = require('./game-back/playBack')
const userEvents = require('./user-profile/user-events')
const gameEvents = require('./game-profile/game-events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
	$('.row-cols-3').on('click', game.playGame)
	// $('#sign-up-form').on('submit', userEvents.signUp)
	$('#sign-in-form').on('submit', userEvents.signIn)
	// $('#sign-out-form').on('submit', userEvents.signOut)
	/* ******************************************** */
	$('#get-games').on('click', gameEvents.getGames)
	// $('#get-spec-game').on('click', game.getSpecGame)
	$('#create-new-game').on('click', gameEvents.createNewGame)
	// $('#update-game').on('click', gameEvents.updateGame)
})
