//

const game = require('./main/play')
const helper = require('./main/helper')
const userEvents = require('./user-profile/user-events')
const gameEvents = require('./game-profile/game-events')

$(() => {
	// sign up
	$('#sign-up-form').on('submit', userEvents.signUp)

	// sign in
	$('#sign-in-form').on('submit', userEvents.signIn)

	$('#gamediv').on('click', '.gamebox', game.playGame)
	$('#gamediv').on('click', '#startGame', (e) => {
		helper.choosePlayerr()
	})
	$('#gamediv').on('click', '.chooseplayer99', (e) => {
		helper.startGame(e)
		gameEvents.createNewGame(e)
		game.setPlayer(e.target.id)
	})
	$('#boardbutton').on('click', helper.boardHandler)
	$('.nav-li-sign-out').on('click', (e) => {
		userEvents.signOut(e)
		helper.whenSignOutSubmitted()
	})

	$('#history').on('click', gameEvents.getGames)
	$('#lastdiv').on('click', '.clickable', gameEvents.getSpecGame)
	$('#new-game').on('click', gameEvents.createNewGame)
})
