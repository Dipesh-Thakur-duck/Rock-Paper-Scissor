let userScore = 0;
let computerScore = 0;

const playButton = document.querySelector('.play-button');

playButton.addEventListener('click',game);

const decisionBoard = document.querySelector('.decisions');
const userScoreBoard = document.querySelector('.user-score');
const computerScoreBoard = document.querySelector('.computer-score');

function game(){
    
    const userChoice = parseInt(prompt("Enter your choice: 1 for paper, 2 for scissor, 3 for rock"));

    const computerChoice = Math.floor(Math.random() * 3) + 1;

    display(userChoice, computerChoice);


    let decision = result(userChoice,computerChoice);


    scoreBoardUpdate(decision);
}

function result(userChoice,computerChoice){

    if(userChoice == computerChoice){
        return 'tie';
    } else if((userChoice == 1 && computerChoice == 3) || (userChoice == 2 && computerChoice == 1) || (userChoice == 3 && computerChoice == 2)){
        return 'win';
    } else {
        return 'lose';
    }
}

function display(userChoice,computerChoice){

    let userOption;
    let computerOption;

    switch (userChoice){
        case 1:
            userOption = '🖐️';
            break;
        case 2:
            userOption = '✌️';
            break;
        case 3:
            userOption = '✊';
            break;
    }
    switch (computerChoice){
        case 1:
            computerOption = '🖐️';
            break;
        case 2:
            computerOption = '✌️';
            break;
        case 3:
            computerOption = '✊';
            break;
    }
    decisionBoard.innerHTML = `
        <p>Your choice: <span class="choice">${userOption}</span></p>

        <p>Computer choice: <span class="choice">${computerOption}</span></p>
    `;
}

function scoreBoardUpdate(decision){

    if(decision === 'win'){
        ++userScore;
        userScoreBoard.innerHTML = `
            User-Score: ${userScore}
        `;
    }else if(decision ==='lose'){
        ++computerScore;
        computerScoreBoard.innerHTML = `
            Computer-Score:${computerScore}
        `;
    }
}