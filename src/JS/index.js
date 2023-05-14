const toggleButton = document.getElementById('toggle-button')
const body = document.querySelector('body')
const imgThemeSwitch = document.querySelector('.button-image')

toggleButton.addEventListener('click', () => {
    body.classList.toggle('modo-escuro')

    if (body.classList.contains('modo-escuro')) { //contains returns true/false
        imgThemeSwitch.setAttribute('src', './src/imagens/moon.png')
    } else {
        imgThemeSwitch.setAttribute('src', './src/imagens/sun.png')
    }
    
})