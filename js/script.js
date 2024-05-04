function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let choiceString = '';

    switch (randomNum) {
        case 0:
            choiceString = 'Rock';
            break;
        case 1:
            choiceString = 'Paper';
            break;
        case 2:
            choiceString = 'Scissors';
            break;
    }

    return choiceString;
}

getComputerChoice();