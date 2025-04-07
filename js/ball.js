const ball = document.createElement('div')
document.body.appendChild(ball)

const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 200
let LPadelHeight = 100

const ballRadius = 45
// calculate width of window height on different devices
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 8
let ballXDirection = 1
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = 1

setInterval(moveBall, 10)
function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }

}

createBall()
function createBall(){
    // parent in append mean outside and child mean inside the body
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
    ball.style.innerHtml.backgroundColor = "blue"
}

createLPadel()
function createLPadel() {
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.backgroundColor = "blue"
    LPadel.style.position = "absolute"
    LPadel.style.left = "50px"
    LPadel.style.top = `${windowHeight / 2 - LPadelHeight / 2}px`
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        //move up
    }
    if (event.key == 's') {
        //move down
    }
})

