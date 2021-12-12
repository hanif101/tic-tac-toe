const html = require('./html-helper')
// SIGN UP -----------------------------
function whenSIGNUPsuccess(useremail) {
	$('#greeting-box').addClass('d-none')
	$('form').trigger('reset')

	$('#main').html(
		html.message(
			'Successfull!',
			`${useremail}`,
			'Sign in to Play',
			'success'
		)
	)
}

function whenSIGNUPfail() {
	$('#sign-up-error').fadeIn(100)
	setTimeout(() => {
		$('#sign-up-error').fadeOut()
	}, 2000)
}

// SIGN IN ----------------------------------------------
function loadGameHtml() {
	$('#main').html(html.gameBox())
	$('#choose').html('')
}
function whenSIGNINsuccess(useremail) {
	$('#main').html('')
	$('#choose').html(html.choose)
	$('#user-email-span-nav').text(useremail)
	$('#user-email-span-nav').removeClass('d-none')
	$('#sign-up-nav-button').addClass('d-none')
	$('#greeting-box').addClass('d-none')
	$('#sign-in-nav-button').addClass('d-none')
	$('#sign-out-nav-button').fadeIn()

	$('form').trigger('reset')
}

function whenSIGNINfail() {
	$('#sign-in-error').fadeIn(100)
	setTimeout(() => {
		$('#sign-in-error').fadeOut()
	}, 2000)
}
//  SIGN OUT ------------------------------------------------------
function whenSIGNOUTsuccess() {
	$('#main').html(html.message('Signing out ...', '', '', 'danger'))
	$('#sign-out-nav-button').fadeOut()
	$('#new-game-button').fadeOut(1)
	$('#winner-box').html('')

	// $('form').trigger('reset')
	setTimeout(() => {
		$('#main').html(html.greetingBox)
		$('#sign-up-nav-button').removeClass('d-none')
		$('#sign-in-nav-button').removeClass('d-none')
		$('#user-email-span-nav').addClass('d-none')
	}, 700)
}

function whenSIGNOUTfail(err) {
	console.log(err)
}

// ---------GAME----------------------------------------------------------------->>>>>>>

// ---------GENERAL------------------------------------------------------------->>>>>>>>

function printWinner(el) {
	$('#winner-box').html(
		html.winnerBox(`${el.toUpperCase()} has won!`)
	)
	$('#game-box').removeClass('game-box')
}

function printTie(el) {
	$('#winner-box').html(html.winnerBox('Its Tie!'))
	$('#game-box').removeClass('game-box')
}

function changeWinnerBG(result) {
	result.forEach((array) => {
		array.forEach((id) => {
			$(`#${id}`).css('color', 'red')
		})
	})
}
function fixBG() {}

function showNewGameButton() {
	$('#new-game-button').fadeIn()
}

function resetBoard() {
	// clear board
	$('#game-box')
		.children()
		.each((index, val) => {
			$(val).css('color', '')
			$(val).text('')
		})

	// trigger click event
	$('#game-box').addClass('game-box')

	//remove win/tie mesage
	$('#winner-box').html('')

	// hide new game button
	$('#new-game-button').fadeOut(300)
}

module.exports = {
	whenSIGNUPsuccess,
	whenSIGNUPfail,
	whenSIGNINsuccess,
	whenSIGNINfail,
	whenSIGNOUTsuccess,
	whenSIGNOUTfail,
	printWinner,
	changeWinnerBG,
	printTie,
	fixBG,
	showNewGameButton,
	loadGameHtml,
	resetBoard,
}
