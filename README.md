# Click-the-black-Box

https://trello.com/b/n6yO0XID/project-1

Dont forget to add wire fram img.

The approach to this game was to first break all clear elements into smaller pieces. My game board had four buttons and i knew each button was going to need an event listener so i created them using a for loop, giving each a unique id for styling later on and appended them into my game board, munipulating the dom and creating the physical buttons. I then knew i needed to select one of these boxes at random to create the games main element. i did this by utilizing the math.random function and having a new button picked everytime a button is selected. I knew i would need a score board that could have up to five players and did this by creating a ordered list and appending each score value into the corresponding list item when the counter reached zero, this also allowed me to reset my score variable, making it possible for the scoring of each player to start, predictably at zero. to play this game is simple! just follow this link and enjoy!  I used recursion twice in this game. once to recall the gamefucntion, that allows my game to be played continuosly and with turns and also again in timer so whenever the timer reaches zero, it not only sends an alert to the next player but also starts the countdown again.

https://nleibow.github.io/Click-the-black-Box/ 