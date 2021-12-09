const {
	playerChoose,
	playGame,
	singup,
	signOutå,
	signOut,
	beforeGame,
	choosePlayerrr,
} = require('./ui')

function whenSignUpSubmitted() {
	$('#before-game').hide()
	$('#gamediv').addClass('d-flex')
	$('#gamediv').append(singup)
}

function whenSignInSubmitted() {
	$('#before-game').hide()
	$('#gamediv').css('display', 'block')
	$('#gamediv').addClass('d-flex')
	$('#signinError').addClass('d-none')
	$('#gamediv').html(playerChoose)

	$('.nav-li-sign-in').addClass('d-none')
	$('.nav-li-sign-out').removeClass('d-none')
}
function whenSignOutSubmitted() {
	$('.nav-li-new-game').addClass('d-none')
	$('.nav-li-board').addClass('d-none')
	$('.nav-li-history').addClass('d-none')
	$('#lastdiv').html('')
	$('#history-header').addClass('d-none')
	$('#history-header-l4g').addClass('d-none')
	$('#gamediv').html(signOut)

	setTimeout(() => {
		$('#gamediv').html(beforeGame)
		$('.nav-li-sign-in').removeClass('d-none')
		$('.nav-li-sign-out').addClass('d-none')
	}, 2000)
}

function startGame(e) {
	$('#gamediv').html(playGame)
	$('.nav-li-history').removeClass('d-none')
	$('.nav-li-new-game').removeClass('d-none')
	$('.nav-li-board').removeClass('d-none')
}

//Update Game
function updateGame(e, data) {
	const gameEvents = require('../game-profile/game-events')
	gameEvents.updateGame(e, data)
}

function boardHandler() {
	$('#gamebox')
		.children()
		.each((index, el) => {
			$(el).hasClass('special')
				? $(el).removeClass('special')
				: $(el).addClass('special')
		})
}

function choosePlayerr() {
	$('#gamediv').html(choosePlayerrr)
}

module.exports = {
	whenSignUpSubmitted,
	whenSignInSubmitted,
	updateGame,
	startGame,
	boardHandler,
	whenSignOutSubmitted,
	choosePlayerr,
}
