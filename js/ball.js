const ball = document.createElement('div')
document.body.appendChild(ball)

const Padel = document.createElement('div')
document.body.appendChild(Padel)
let PadelWidth = 20
let PadelHeight = 100

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

createPadel()
function createPadel(){
    Padel.style.width = `${PadelWidth}px`
    Padel.style.height = `${PadelHeight}px`
    Padel.style.backgroundColor = "blue"
    Padel.style.position = "absolute"
    Padel.style.left = "50%"
    Padel.style.top = "20px"
}




