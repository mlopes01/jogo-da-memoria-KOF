const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')
function validateinput({ target }) {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}


function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateinput)
form.addEventListener('submit', handleSubmit)



const loginaudio = document.getElementById('myAudio');
loginaudio.volume = 0.2
loginaudio.play();



