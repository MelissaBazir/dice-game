let globalScores = document.querySelectorAll('.global-score-count')
let currentScores = document.querySelectorAll('.current-score-count')
let players = document.querySelectorAll('.player')
let dice = document.querySelector('.dice')
const newGameBtn = document.querySelector('#new-game')
const rollDiceBtn = document.querySelector('#roll-dice')
const holdBtn = document.querySelector('#hold')

// Display an element on the page
const displayElement = (element, tagName) => {
    tagName.innerHTML = element
}

// Get the index of a player
const getPlayerIndex = (player) => {
    return players.indexOf(player)
}

//reset a score to 0
const reset = (score) => {
    score = 0
}

// add points to the score of a player
const addPoints = (points, score, player) => {
    return (score[getPlayerIndex(player)] += points)
}

// change the active player
const changePlayer = () => {
    players.forEach((player) => {
        player.classList.toggle('.active')
    })
}

// roll dice
const rollDice = () => {
    // get a random number between 1 and 6, then display it in dice
    let numberDice = Math.floor(Math.random() * 6) + 1
    displayElement(numberDice, dice)
    // get the current player
    let player = players[0].classList.contains('.active')
        ? players[0]
        : players[1]
    // if number not 1, add the number to current score, then display it
    // if number is 1, set current score to 0 and change player
    if (numberDice !== 1) {
        displayElement(
            addPoints(numberDice, currentScores, player),
            currentScores[getPlayerIndex(player)]
        )
    } else {
        reset(currentScores[getPlayerIndex(player)])
        changePlayer()
    }
}
