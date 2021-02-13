let playedValues = [['','',''],['','',''],['','','']];
console.log(playedValues);

//box selection
function play(boxNum){
    playBox = document.getElementById(boxNum);
    playerValue = document.getElementById('player').innerText;
    //console.log(playerValue);

    document.getElementById(boxNum).innerText = playerValue;
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
