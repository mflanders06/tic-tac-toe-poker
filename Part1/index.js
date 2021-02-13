let playedValues = ['','','','','','','','',''];
//console.log(playedValues);
//window.alert('hello');
//box selection
function play(boxNum){
    playBox = document.getElementById(boxNum);
    playerValue = document.getElementById('player').innerText;
    //console.log(playerValue);
    document.getElementById(boxNum).innerText = playerValue;
    updatePlayedValues(boxNum, playerValue);
    determineWinner(playerValue);
    togglePlayer();   
}

//Just a toggle to switch between X and O
function togglePlayer(){
    if (document.getElementById('player').innerText === 'X'){
            document.getElementById('player').innerText = 'O';
        }
    else if (document.getElementById('player').innerText === 'O'){
            document.getElementById('player').innerText = 'X';
    }
}


//updates the playedValues array
function updatePlayedValues(boxNum, playerValue){
    playedValues.splice(boxNum, 1, playerValue);
    //console.log(boxNum, playerValue, playedValues);
}

function determineWinner(playerValue){
    checkRows(playerValue);
    checkColumns(playerValue);
    checkDiagonal(playerValue);
    checkCat();
}

function checkRows(playerValue){
    let winCounter = 0;
    for(let rowCounter = 0; rowCounter < 3; rowCounter++){
        winCounter = 0;
        for (let i = 1; i < 4; i++){
            if (playedValues[ (i + (rowCounter * 3) - 1) ] === playerValue){
                winCounter += 1;
                if (winCounter === 3){
                    window.alert(`THE WINNER IS PLAYER ${playerValue}!`);
                }
            }
        }
    }

}

function checkColumns(playerValue){
    if (playedValues[0] === playerValue && playedValues[3] === playerValue && playedValues[6] === playerValue){
        window.alert(`THE WINNER IS PLAYER ${playerValue}!`);
    }
    else if (playedValues[1] === playerValue && playedValues[4] === playerValue && playedValues[7] === playerValue){
        window.alert(`THE WINNER IS PLAYER ${playerValue}!`);
    }
    else if (playedValues[2] === playerValue && playedValues[5] === playerValue && playedValues[8] === playerValue){
        window.alert(`THE WINNER IS PLAYER ${playerValue}!`);
    }
    
}

function checkDiagonal(playerValue){
    if (playedValues[0] === playerValue && playedValues[4] === playerValue && playedValues[8] === playerValue){
        window.alert(`THE WINNER IS PLAYER ${playerValue}!`);
    }
    else if (playedValues[2] === playerValue && playedValues[4] === playerValue && playedValues[6] === playerValue){
        window.alert(`THE WINNER IS PLAYER ${playerValue}!`);
    }
}

function checkCat(){
    for (let i = 0; i < playedValues.length; i++){
        if (playedValues[i] === ''){
            return
        }
    }
    window.alert("CAT's");
}