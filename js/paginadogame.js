const grid = document.querySelector('.grid')
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

const checkcards = () => {

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

    frente.style.backgroundImage = `url('../img/${personagem}.jpg')`
    verso.style.backgroundImage = `url('../img/kof98...2.jpg')`

    card.appendChild(frente)
    card.appendChild(verso)
    card.addEventListener('click', revealcard)

    grid.appendChild(card)

}
const loadgame = () => {
    const duplicarcartas = [...cartas, ...cartas]

    const embaralharduplicarcartas = duplicarcartas.sort(() => Math.random() - 0.5)

    embaralharduplicarcartas.forEach((carta) => {
        creatcard(carta)



    });
}



loadgame()
