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
class="row row-cols-3 mt-5 d-flex align-self-center gamebox"
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

module.exports = {
	playerChoose,
	playGame,
	last5games,
	singup,
}
