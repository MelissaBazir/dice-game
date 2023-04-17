let globalScore1 = document.querySelector('#global-score-1')
let globalScore2 = document.querySelector('#global-score-2')
let currentScore1 = document.querySelector('#current-score-1')
let currentScore2 = document.querySelector('#current-score-2')
let player1 = document.querySelector('.one')
let player2 = document.querySelector('.two')

const reset = () => {
    //reset all scores to 0
    globalScore1 = 0
    globalScore2 = 0
    currentScore1 = 0
    currentScore2 = 0
}

const resetCurrent = (player) => {
    switch (player) {
        case 'one':
            currentScore1 = 0
            break
        case 'two':
            currentScore2 = 0
            break
        default:
            console.log('joueur non valide')
    }
}

const changePlayer = (player) => {
    player.classList.toggle('.active')
}
