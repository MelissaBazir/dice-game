let globalScores = document.querySelectorAll('.global-score-count')
let currentScores = document.querySelectorAll('.current-score-count')
let players = document.querySelectorAll('.player')
let dice = document.querySelector('.dice')
let activePlayer = 0
let current_score
const newGameBtn = document.querySelector('#new-game')
const rollDiceBtn = document.querySelector('#roll-dice')
const holdBtn = document.querySelector('#hold')

// display an element on the page
const displayElement = (element, tagName) => {
    tagName.textContent = element
}

//function to initialize a new game
const initGame = () => {
    current_score = 0
    activePlayer = 0
    currentScores.forEach((score) => {
        score.textContent = 0
    })

}

// add points to the score of a player
const addPoints = (points, score, player) => {
    return (score[player] += points)
}

// change the active player
const changePlayer = () => {
    players.forEach((player) => {
        player.classList.toggle('.active')
    })
    return activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
}

// roll dice
const rollDice = () => {
    currentScores[activePlayer] = 0
    // get a random number between 1 and 6, then display it in dice
    let numberDice = Math.floor(Math.random() * 6) + 1
    displayElement(numberDice, dice)
    // if number not 1, add the number to current score, then display it
    // if number is 1, set current score to 0 and change player
    if (numberDice !== 1) {
        currentScores[activePlayer] += numberDice
        console.log(currentScores[activePlayer])
        displayElement(
            addPoints(numberDice, currentScores, activePlayer),
            currentScores[activePlayer]
        )
    } else {
        changePlayer()
    }
}

//hold
const hold = () => {
    // get the current score and send it to global score
    addPoints(currentScores, globalScores, activePlayer)
    // set the current score to 0
    // change player
}

// on new game click, a new game is initialized
newGameBtn.addEventListener('click', () => {
    initGame()
})

// on roll dice click, the roll dice function is executed
rollDiceBtn.addEventListener('click', () => {
    rollDice()
})

// on hold click, the hold function is executed
holdBtn.addEventListener('click', () => {
    hold()
})

// when a player scores 100 points, he wins => to be defined (modal window)
