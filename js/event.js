
const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')



element1.addEventListener('click', ()=> {
    element1.innerHTML = "I've been clicked! <br> Try Double Clicking me."
})

element1.addEventListener('dblclick', ()=> {
    element1.innerHTML = "I have been double clicked! <br> try single clickinge me."
})


element2.addEventListener('mouseover', ()=> {
    element2.style.color = "Yellow"
    element2.style.backgroundColor = "Blue"
})

element2.addEventListener('mouseout', ()=> {
    element2.style.color = "White"
    element2.style.backgroundColor = "#C71585"
})

let positionY = 0;
positionX = 0;

document.addEventListener ('keyup', (event)=> {
    // console.log tell us what key we press
    console.log(event.key)

    if (event.key == 'ArrowDown') {
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 10
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 10
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 10
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`
})

element4.addEventListener ('click', ()=> {
    element4.style.width = "10px"
    element4.style.height = "10px"
    element4.innerHTML = ""
    element4.style.opacity = .3
})
// if you want a use to a key to do something, you need to use document.addEventlistener ('keyup', (event))
document.addEventListener ('keyup', (event)=>{
    if (event.key == 'j') {
        element4.style.width = "300px"
        element4.style.height = "50px"
        element4.style.opacity = 1
        element4.innerHTML = " <h4>Click me to make me small. <br> Press 'j' to bring me back</h4>"
    }
})


const list = ['running', 'paused']
let index = 0
element5.addEventListener ('click', ()=> {
    element5.style.animationPlayState = list[index]
    // animationplaystate is build the animation from css
    index = (index + 1) % 2
    // mod - % that will loop numbers. mod 2 will only loop 2 number- 0, 1
})
