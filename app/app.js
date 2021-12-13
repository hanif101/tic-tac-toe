const user = require('./user-profile/user-events')
const game = require('./game-profile/game-events')
const store = require('./store')
$(() => {
	// sign up
	$('#sign-up-form').on('submit', user.signUP)
	// sign in
	$('#sign-in-form').on('submit', user.signIN)
	//sign out
	$('#sign-out-nav-button').on('click', user.signOUT)
	$('#main').on('click', '.game-box', game.gameStart)
	$('#choose').on('click', '.choosebox', game.choosePlayer)
	// $('#history').on('click', gameEvents.getGames)
	$('#new-game-button').on('click', game.resetBoard)
})
