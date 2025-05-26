# Rock-Paper-Scissor

# HTML:

All the content of the rock, paper, scissor game is written and added (using JS) in a single div with class main. This div is styled using CSS to set background-color, font-family and height the content will cover.

The main div contain heading, rules of the game and usual game features like: play-button, result and scoreboard.

# JS:

In the first two lines, userScore and computerScore is initialized to zero. Following lines contain js to access the HTML elements like play button, result display section and scoreboard.

When play button is clicked, [game] function is called. This function prompts user for its choice, generates computer's choice and calls [display] function which generates HTML to show the choices made. The return value of [result] function is stored in 'decision' variable and it is passed as an argument to [scoreBoardUpdate] function which generates HTML to display score. 
