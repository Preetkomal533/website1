const darkModeButton = document.getElementById('darkMode')
const body = document.body
const logo = document.querySelector('.logo a')
const titleLinks = document.querySelectorAll('.container ul li a')


darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        logo.style.color = 'white'
        document.querySelector('.header').style.color = 'white'
        document.querySelector('.heading h1').style.color = 'white'
        document.querySelector('.heading h3').style.color = 'white'
    } else {
        document.querySelector('.header').style.color = 'black'
        document.querySelector('.heading h1').style.color = 'black'
        document.querySelector('.heading h3').style.color = 'black'
        document.querySelector('.container .logo a').style.color = 'black'
        logo.style.color = 'black'
    }


})


titleLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = 'red'

    });
    link.addEventListener('click', () => {
        link.style.color = ''

    });
});



