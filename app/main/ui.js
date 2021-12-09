let playerChoose = `
<div id="startGame" class="font-monospace">
						<h1>Welcome</h1>
						<h3>Start Game here!</h3>
						<div class="d-inline">
							<button
                            role="button"
								class="btn btn-secondary mt-3 font-monospace"
								style="height: 50px; width: 140px"
							>
								Start Game
							</button>
						</div>
	</div>
`

// ********************************************************
const playGame = `<div
id="gamebox"
class="row row-cols-3 mt-1 d-flex align-self-center gamebox"
>
<div
    id="1"
    class="
        col
        border-top-0 border-start-0
        text-center
        fw-bold
    "
></div>
<div
    id="2"
    class="col border-top-0 text-center fw-bold"
></div>
<div
    id="3"
    class="col border-top-0 border-end-0 text-center fw-bold"
></div>
<div
    id="4"
    class="col border-start-0 text-center fw-bold"
></div>
<div id="5" class="col text-center fw-bold"></div>
<div
    id="6"
    class="col border-end-0 text-center fw-bold"
></div>
<div
    id="7"
    class="
        col
        border-start-0 border-bottom-0
        text-center
        fw-bold
    "
></div>
<div
    id="8"
    class="col box8 border-bottom-0 text-center fw-bold"
></div>
<div
    id="9"
    class="
        col
        box9
        border-bottom-0 border-end-0
        text-center
        fw-bold
    "
></div>
</div>`
// *********************************************************************************
function last5games(game) {
	const last5games = `
    <div
        id="1"
        class="
            col
            border-top-0 border-start-0
            text-center
            fw-bold
        "
    >${game[0]}</div>
    <div
        id="2"
        class="col border-top-0 text-center fw-bold"
    >${game[1]}</div>
    <div
        id="3"
        class="col border-top-0 border-end-0 text-center fw-bold"
    >${game[2]}</div>
    <div
        id="4"
        class="col border-start-0 text-center fw-bold"
    ><${game[3]}/div>
    <div id="5" class="col text-center fw-bold">${game[4]}</div>
    <div
        id="6"
        class="col border-end-0 text-center fw-bold"
    >${game[5]}</div>
    <div
        id="7"
        class="
            col
            border-start-0 border-bottom-0
            text-center
            fw-bold
        "
    >${game[6]}</div>
    <div
        id="8"
        class="col box8 border-bottom-0 text-center fw-bold"
    >${game[7]}</div>
    <div
        id="9"
        class="
            col
            box9
            border-bottom-0 border-end-0
            text-center
            fw-bold
        "
    >${game[8]}</div>
    `

	return last5games
}

let singup = `
<div
id="99"
class="
    font-monospace
    text-center
    fw-bold
"
><h1>Sign In to continue...</h1>
</div>
`
let signOut = `
<div
id="99signOut"
class="
    font-monospace
    text-center
    fw-bold
"
><h5 class="text-danger">Signin Out...</h5>
</div>
`

const beforeGame = `
<div
					style="height: 400px"
					class="
						d-flex
						justify-content-around
						align-items-center
						bg-light
						p-0
                        w-100
					"
				>
					<div class="gefore-game-text  font-monospace">
						<h1>Play Tic-Tac-Toe</h1>
						<h2>for FREE</h2>
						<h4>You must sign up first!</h4>
						<div class="d-inline">
							<button
								id="before-game-sign-up"
								type="button"
								class="btn btn-danger mt-3"
								data-bs-toggle="modal"
								data-bs-target="#signup"
								style="height: 40px; width: 100px"
							>
								Sign up
							</button>
						</div>
					</div>
					<div class="before-game-img">
						<img src="./public/Tic-tac-toe-animated.gif" />
					</div>
				</div>
				<div class="2nd font-monospace ">
					<h4 class="mx-5"></h4>
				</div>`

function playSpecificGame(specialGame) {
	let game = `<div
    id="gamebox"
    class="row row-cols-3 mt-5 d-flex align-self-center gamebox text-dark"
    >
    <div
        id="1"
        class="
            col
            border-top-0 border-start-0
            text-center
            fw-bold

        "
    >${specialGame.cells[0].toUpperCase()}</div>
    <div
        id="2"
        class="col border-top-0 text-center fw-bold text-dark"
    >${specialGame.cells[1].toUpperCase()}</div>
    <div
        id="3"
        class="col border-top-0 border-end-0 text-center fw-bold text-dark"
    >${specialGame.cells[2].toUpperCase()}</div>
    <div
        id="4"
        class="col border-start-0 text-center fw-bold text-dark"
    >${specialGame.cells[3].toUpperCase()}</div>
    <div id="5" class="col text-center fw-bold text-dark">${specialGame.cells[4].toUpperCase()}</div>
    <div
        id="6"
        class="col border-end-0 text-center fw-bold text-dark"
    >${specialGame.cells[5].toUpperCase()}</div>
    <div
        id="7"
        class="
            col
            border-start-0 border-bottom-0
            text-center
            fw-bold text-dark
        "
    >${specialGame.cells[6].toUpperCase()}</div>
    <div
        id="8"
        class="col box8 border-bottom-0 text-center fw-bold text-dark"
    >${specialGame.cells[7].toUpperCase()}</div>
    <div
        id="9"
        class="
            col
            box9
            border-bottom-0 border-end-0
            text-center
            fw-bold text-dark
        "
    >${specialGame.cells[8].toUpperCase()}</div>
    </div>`

	return game
}

const choosePlayerrr = `<div
					id="mainbox"
					class="row row-cols-2 chooseplayer99 my-5"
				>
					<div id="1" class="col selectplayer text-center text-dark pt-2 fs-1 me-3 fw-bold">
						X
					</div>
					<div id="0" class="col selectplayer text-center text-dark fs-1 pt-2 fw-bold">O</div>
				</div>`

const winner = (val) => {
	return `<div id="winner" class="font-monospace bg-warning text-center mt-4 pt-2" style= "width: 270px">
<h4 class="text-center">${val.toUpperCase()}!</h4>

</div>
`
}

module.exports = {
	playerChoose,
	playGame,
	last5games,
	singup,
	signOut,
	beforeGame,
	playSpecificGame,
	choosePlayerrr,
	winner,
}
