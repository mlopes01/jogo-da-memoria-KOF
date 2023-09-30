const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const spanTimer = document.querySelector('.timer')
const cartas = ['ANDY',
    'BLUE MARY',
    'CHANG',
    'DAIMOM',
    'KENSOU',
    'KIM',
    'RYO',
    'SHARNIE',
    'TERRY',
    'VICE',
    'Yamazaki',
    'YURI']

let firstcard = ''
let secondcard = ''
let scoreerro = 0


const checkendgame = () => {
    const disabledcards = document.querySelectorAll('.disable-card')

    if (disabledcards.length == 24) {
        clearInterval(this.loop)
        alert(spanPlayer.innerHTML + ' Voce finalizou o jogo com ' + scoreerro + '  erros em  ' + spanTimer.innerHTML + ' segundos')

    }
}

const checkcards = () => {
    const firstcharacter = firstcard.getAttribute('data-caracter')
    const secondcardcharacter = secondcard.getAttribute('data-caracter')

    if (firstcharacter == secondcardcharacter) {

        firstcard.firstChild.classList.add('disable-card')
        secondcard.firstChild.classList.add('disable-card')

        firstcard = ''
        secondcard = ''

        checkendgame()
    } else {
        scoreerro = scoreerro + 1
        setTimeout(() => {
            firstcard.classList.remove('reveal-card')
            secondcard.classList.remove('reveal-card')

            firstcard = ''
            secondcard = ''
        }, 1000)

    }
}
const revealcard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return
    }
    if (firstcard == '') {
        target.parentNode.classList.add('reveal-card')
        firstcard = target.parentNode
    } else if (secondcard == '') {
        target.parentNode.classList.add('reveal-card')
        secondcard = target.parentNode

        checkcards()
    }

}

const creatcard = (personagem) => {
    const card = document.createElement('div')
    const verso = document.createElement('div')
    const frente = document.createElement('div')
    card.className = 'card'
    frente.className = 'lado frente'
    verso.className = 'lado verso'

    frente.style.backgroundImage = `url( '../img/${personagem}.jpg')`
    verso.style.backgroundImage = `url('../img/kof98...2.jpg')`

    card.appendChild(frente)
    card.appendChild(verso)
    card.addEventListener('click', revealcard)
    card.setAttribute('data-caracter', personagem)

    grid.appendChild(card)

}
const loadgame = () => {
    const duplicarcartas = [...cartas, ...cartas]

    const embaralharduplicarcartas = duplicarcartas.sort(() => Math.random() - 0.5)

    embaralharduplicarcartas.forEach((carta) => {
        creatcard(carta)



    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +spanTimer.innerHTML
        spanTimer.innerHTML = currentTime + 1

    }, 1000)
}

const marysong = document.getElementById('page-game-song')
marysong.volume = 0.2
marysong.play()


window.onload = () => {
    const playerName = localStorage.getItem('player')
    spanPlayer.innerHTML = playerName
    startTimer()
    loadgame()
}