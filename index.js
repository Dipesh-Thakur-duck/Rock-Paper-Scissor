let userScore = 0;
let computerScore = 0;

const playButton = document.querySelector('.play-button');
const buttonDiv = document.querySelector('.buttons');

playButton.addEventListener('click',game);

const decisionBoard = document.querySelector('.decisions');
const userScoreBoard = document.querySelector('.user-score');
const computerScoreBoard = document.querySelector('.computer-score');

function game(){
    if(playButton.innerText = 'Play Again?'){
        playButton.innerText = 'Play';
    }
    let userChoice = null;
    if(buttonDiv.innerHTML.trim() === ''){
        buttonCreation();
    }

    buttonDiv.addEventListener('click',(event)=>{
        let target = event.target;

        switch(target.id){
            case 'rock':
                userChoice = 3;
                break;
            case 'paper':
                userChoice = 1;
                break;
            case 'scissor':
                userChoice = 2;
                break;
        };

        const computerChoice = Math.floor(Math.random() * 3) + 1;

        display(userChoice, computerChoice);


        let decision = result(userChoice,computerChoice);


        scoreBoardUpdate(decision);

    })

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
        userScore++;
        userScoreBoard.innerHTML = `
            User-Score: ${userScore}
        `;
    }else if(decision ==='lose'){
        computerScore++;
        computerScoreBoard.innerHTML = `
            Computer-Score:${computerScore}
        `;
    }
    
    if(userScore === 5 || computerScore === 5){
        gameComplete(userScore,computerScore);
        userScore = 0;
        computerScore = 0;
    }
}

function buttonCreation(){
    const buttonRock = document.createElement('button');
    const buttonPaper = document.createElement('button');
    const buttonScissor = document.createElement('button');

    buttonRock.textContent = '✊';
    buttonPaper.textContent = '🖐️';
    buttonScissor.textContent = '✌️';

    buttonRock.id = 'rock';
    buttonPaper.id = 'paper';
    buttonScissor.id = 'scissor';

    buttonDiv.appendChild(buttonRock);
    buttonDiv.appendChild(buttonPaper);
    buttonDiv.appendChild(buttonScissor);
}

function gameComplete(userScore,computerScore){
    const winnerText = userScore === 5 ? 'You win!' : 'Computer Wins';
    playButton.innerHTML = winnerText;

    playButton.disabled = true;

    setTimeout(()=>{
        playButton.innerHTML = 'Play Again?'
        playButton.disabled = false;
    },3000)
    userScore = 0;
    computerScore = 0;
    userScoreBoard.innerHTML = `User-Score: ${userScore}`;
    computerScoreBoard.innerHTML = `Computer-Score: ${computerScore}`;

    playButton.onclick = ()=>{
        game();
    };
}