const element1 = document.getElementById('element1')




document.addEventListener('click', ()=> {
    document.body.style.backgroundColor = "yellow";
    document.body.style.backgroundImage = "url('../images/turtle.avif')"; //changing bg image

})


document.addEventListener('dblclick', ()=> {
    document.body.style.backgroundImage = "url('../images/shark.avif')";
})
