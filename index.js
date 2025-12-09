const humanScore = 0
const computerScore = 0

function getComputerChoice() {
    choice = Math.floor((Math.random() * 3) + 1)

    switch(choice) {
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        case 3:
            return "scissor"
            break
    }
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissor?")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === 'rock' && computerChoice == 'scissor') {
        return 'You won! Rock beats scissor'
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return 'You won! Paper beats rock'
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        return 'You won! Scissor beats paper'
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        return 'You lost! Paper beats rock'
    } else if (computerChoice == 'scissor' && humanChoice == 'paper') {
        return 'You lost! Scissor beats paper'
    } else if (computerChoice == 'rock' && humanChoice == 'scissor') {
        return 'You lost! Rock beats scissor'
    } else {
        return `It's a tie! ${humanChoice} == ${computerChoice}`
    }
}

function playGame() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    console.log(`Human choice: ${humanChoice}`)
    console.log(`Computer choice: ${computerChoice}`)

    console.log(playRound(humanChoice, computerChoice))
}

for (let i = 1; i <= 5; i++) {
    playGame()
}