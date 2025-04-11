const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 10
let LPadelHeight = 150
let LPadelSpeed = 10
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let LPadelXPosition = 70


const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = 1

const score = document.createElement('div')
document.body.appendChild(score)
let score1 = 8
 //dsiplay score and increase score when ball hits padel
const level = document.createElement('div')
document.body.appendChild(level)
let level1 = 1
//if ball pas padel, stop or disapper the ball and let the user know game is over
//optional sound effect when ball hits padel
//background music


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

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPadelTop = LPadelYPosition
    let LPadelRight = LPadelXPosition + LPadelWidth
    let LPadelBottom = LPadelYPosition + LPadelHeight

    if(
        (ballBottom >= LPadelTop) &&
        (ballTop <= LPadelBottom) &&
        (ballLeft <= LPadelRight) &&
        (ballXDirection == -1)
    ){
        ballXDirection = ballXDirection * -1
        score1++
        score.innerHTML = `Score: ${score1}`
        if(`${score1}` % 10 == 0) {
            level1++
            level.innerHTML = `Level: ${level1}`
            ballSpeed = ballSpeed + 2
        }

    } else if (ballLeft <= 0) {
        // Game over condition
        cancelAnimationFrame(animationId) // Stop the game
        ball.style.display = "none"
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

wkey = false
skey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wkey = true
    }
    if (event.key == 's') {
        skey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w'){
        wkey = false
    }
    if (event.key == 's'){
        skey = false
    }
})

function moveLPadel() {
    if (wkey == true && LPadelYPosition > 0) {
        LPadelYPosition = LPadelYPosition - LPadelSpeed
    }
    if (skey == true && LPadelYPosition < windowHeight - LPadelHeight) {
        LPadelYPosition = LPadelYPosition + LPadelSpeed
    }
    LPadel.style.top = `${LPadelYPosition}px`
}


document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        if (LPadelYPosition <= 0) {
            LPadelYPosition = 0
        }
        else {
            LPadelYPosition = LPadelYPosition - LPadelSpeed

        }
        }
    if (event.key == 's') {
        if (LPadelYPosition >= windowHeight - LPadelHeight){
            LPadelYPosition = windowHeight - LPadelHeight
        }
        else {
            LPadelYPosition = LPadelYPosition + LPadelSpeed

        }
        }
        LPadel.style.top = `${LPadelYPosition}px`
})

function animate() {
    moveBall()
    moveLPadel()
    requestAnimationFrame(animate)
}
animate()

createScore()
function createScore() {
    score.style.width = "150px"
    score.style.height = "50px"
    score.style.backgroundColor = "gray"
    score.style.borderRadius = "10px"
    score.style.position = "absolute"
    score.style.left = "1200px"
    score.innerHTML = `Score: ${score1}`
    score.style.color = "black"
    score.style.fontSize = "30px"
    score.style.textAlign = "center"
    score.style.justifyContent = "center"

}

createLevel()
function createLevel() {
    level.style.width = "150px"
    level.style.height = "50px"
    level.style.backgroundColor = "gray"
    level.style.borderRadius = "10px"
    level.style.position = "absolute"
    level.style.left = "1000px"
    level.innerHTML = `Level: ${level1}`
    level.style.color = "black"
    level.style.fontSize = "30px"
    level.style.textAlign = "center"
    level.style.justifyContent = "center"
}
