// decide which element you want
// you can end witj ; or not does not matter
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
// right click on page and choose inspect to check errors
// creating variable use word let
let load = 0
// change variable into text use `${variable} whatevr you want`
// timer
let int = setInterval(blurring, 30)
// 300 is millisecond
function blurring() {
    load = load + 1
    if (load > 99) {
        clearInterval(int)
    }
    // or load++ or load+ 1
    loadText.innerText = `${load}%`
    // whenevr you want to access css and change something use name.style.what you want to change
    bg.style.filter = `blur(${50 - (load /2)}px)`
    loadText.style.opacity = `${1- (load / 100)}`

}

