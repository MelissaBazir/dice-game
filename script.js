let globalScores = document.querySelectorAll('.global-score-count')
let currentScores = document.querySelectorAll('.current-score-count')
let players = document.querySelectorAll('.players')
let dice = document.querySelector('#dice')
let activePlayer = 0
let current_score = 0
let global_score = [0, 0]
const newGameBtn = document.querySelector('#new-game')
const rollDiceBtn = document.querySelector('#roll-dice')
const holdBtn = document.querySelector('#hold')
const winningModal = new bootstrap.Modal('#winning-modal')

// display an element on the page
const displayElement = (element, tagName) => {
    tagName.textContent = element
}

//function to initialize a new game
const initGame = () => {
    current_score = 0
    activePlayer = 0
    global_score = [0, 0]
    currentScores.forEach((score) => {
        score.textContent = 0
    })
    globalScores.forEach((score) => {
        score.textContent = 0
    })
}

// change the active player
const changePlayer = () => {
    current_score = 0
    displayElement(current_score, currentScores[activePlayer])
    players.forEach((player) => {
        player.classList.toggle('active')
    })
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
}

// roll dice function
const rollDice = () => {
    // get a random number between 1 and 6, then display it in dice
    let numberDice = Math.floor(Math.random() * 6) + 1
    dice.setAttribute('src', `./images/dice/dice_${numberDice}.png`)
    // if number not 1, add the number to current score, then display it
    // if number is 1, set current score to 0 and change player
    if (numberDice !== 1) {
        current_score += numberDice
        displayElement(current_score, currentScores[activePlayer])
    } else {
        changePlayer()
    }
}

//hold function
const hold = () => {
    // get the current score and send it to global score
    global_score[activePlayer] += current_score
    displayElement(global_score[activePlayer], globalScores[activePlayer])
    if (global_score[activePlayer] >= 100) {  // Winning score
        document.querySelector('.modal-title').textContent = `Player ${
            activePlayer + 1
        } wins`
        winningModal.show()
        confetti()
    } else {
        // change player
        changePlayer()
    }
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
