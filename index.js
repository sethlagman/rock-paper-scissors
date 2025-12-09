const humanScore = 0
const computerScore = 0

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

function getHumanChoice() {
    return prompt("Rock, paper, or scissor?")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === 'rock' && computerChoice == 'scissor') {
        console.log('You won! Rock beats scissor')
        return 'human'
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You won! Paper beats rock')
        return 'human'
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        console.log('You won! Scissor beats paper')
        return 'human'
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log('You lost! Paper beats rock')
        return 'computer'
    } else if (computerChoice == 'scissor' && humanChoice == 'paper') {
        console.log('You lost! Scissor beats paper')
        return 'computer'
    } else if (computerChoice == 'rock' && humanChoice == 'scissor') {
        console.log('You lost! Rock beats scissor')
        return 'computer'
    } else {
        console.log(`It's a tie! ${humanChoice} == ${computerChoice}`)
        return 'tie'
    }
}

function playGame(numRounds) {
    let humanScore = 0
    let computerScore = 0

    for (let i = 1; i <= numRounds; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        const winner = playRound(humanChoice, computerChoice)

        if (winner == 'human') {
            humanScore += 1
        } else if (winner == 'computer') {
            computerScore += 1
        }
    }

    console.log(`
        Scores:
        Your score: ${humanScore}
        Computer score: ${computerScore}
        `)

    if (humanScore > computerScore) {
        return 'You won the game!'
    } else if (humanScore < computerScore) {
        return 'You lost the game!'
    } else {
        return 'Its a tie!'
    }
}


const gameWinner = playGame(5)
alert(gameWinner)