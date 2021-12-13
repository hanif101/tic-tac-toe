const winnerBox = (text) => {
	return `<h4 class="bg-light">${text}</h4>`
}

const message = (text1, text2, text3, color) => {
	return `<div id="message" class="font-monospace mt-5">
    <h2 class ="text-${color}">${text1}</h2>
    <h6><span class="bg-light text-center" style="display: block;">${text2}</span></h6>
    <h6 class="text-muted">${text3}</h6>
   
</div>`
}

const gameBox = () => {
	return `<div id="game-box" class="row row-cols-3 game-box">
    <div
        id="1"
        class="col border-top-0 border-start-0 text-center"
    ></div>
    <div
        id="2"
        class="col border-top-0 text-center"
    ></div>
    <div
        id="3"
        class="col border-top-0 border-end-0 text-center"
    ></div>
    <div
        id="4"
        class="col border-start-0 text-center"
    ></div>
    <div id="5" class="col text-center"></div>
    <div
        id="6"
        class="col border-end-0 text-center"
    ></div>
    <div
        id="7"
        class="
            col
            border-start-0 border-bottom-0
            text-center

        "
    ></div>
    <div
        id="8"
        class="col box8 border-bottom-0 text-center"
    ></div>
    <div
        id="9"
        class="
            col
            box9
            border-bottom-0 border-end-0
            text-center
            
        "
    ></div>
</div>`
}

const greetingBox = `<div id="greeting-box" class="font-monospace mt-5">
    <h4>Welcome!</h4>
    <h6 class="text-muted">if no account ...</h6>
    <h3>Sign UP to continue!</h3>
</div>`

const choose = `<div
                    id="player"
                    class="row row-cols-2 choose d-flex justify-content-center text-center"
                    >
                    <div id="1" class="col choosebox border-0 text-center">X</div>
                    <div id="0" class="col choosebox border-0 text-center">O</div>
                    </div>
                `

module.exports = {
	winnerBox,
	message,
	gameBox,
	greetingBox,
	choose,
}
