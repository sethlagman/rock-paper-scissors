const html = document.querySelector('html')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const buttons = document.querySelector('buttons')

const displayRoundWinner = document.createElement('h3')
const displayResult = document.createElement('h1')
const displayScore = document.createElement('h3')

container.appendChild(displayRoundWinner)
container.appendChild(displayResult)
container.appendChild(displayScore)

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    choice = Math.floor((Math.random() * 3) + 1)

    switch(choice) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissor"
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === 'rock' && computerChoice == 'scissor') {
        return {
            'winner': 'human',
            'prompt': 'You won! Rock beats scissor'
        }
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return {
            'winner': 'human',
            'prompt': 'You won! Paper beats rock'
        }
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        return {
            'winner': 'human',
            'prompt': 'You won! Scissor beats paper'
        }
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        return {
            'winner': 'computer',
            'prompt': 'You lost! Paper beats rock'
        }
    } else if (computerChoice == 'scissor' && humanChoice == 'paper') {
        return {
            'winner': 'computer',
            'prompt': 'You lost! Scissor beats paper'
        }
    } else if (computerChoice == 'rock' && humanChoice == 'scissor') {
        return {
            'winner': 'computer',
            'prompt': 'You lost! Rock beats scissor'
        }
    } else {
        return {
            'winner': 'tie',
            'prompt': `It's a tie! ${humanChoice} == ${computerChoice}`
        }
    }
}

function updateScore(winner) {
    if (winner == 'human') {
        humanScore++
    } else if (winner == 'computer') {
        computerScore++
    }
}

function displayWinner(winner) {
    if (humanScore == 5 || computerScore == 5) {
        alert(`${winner} has won the game!`)
        resetGame()
    }
}

function resetGame() {
    humanScore = 0
    computerScore = 0

    displayRoundWinner.textContent = ''
    displayScore.textContent = ''
}

function playGame() {
    container.addEventListener('click', (event) => {
        event.stopPropagation()
        target = event.target
        let humanChoice
        let computerChoice = getComputerChoice()

        switch (target.className) {
            case 'rock':
                humanChoice = 'rock'
                break
            case 'paper':
                humanChoice = 'paper'
                break
            case 'scissor':
                humanChoice = 'scissor' 
                break
        }

        let roundResult = playRound(humanChoice, computerChoice)
        let winner = roundResult.winner
        let prompt = roundResult.prompt

        updateScore(winner)

        displayRoundWinner.textContent = prompt
        displayScore.textContent = `
        Human : ${humanScore} | Computer : ${computerScore}`

        displayWinner(winner)
    })
}

playGame()