let score = 3;
let moves = 0;
let currentPlayer= 'X';
let player1 = true;
let player2 = true;
turn =+1;


window.addEventListener( 'DOMContentLoaded', function () {
	
		const buttonRollDice = document.querySelector( '.roll' );



function changePlayer() {

// console.log()
    // if (currentPlayer === 'X') {
    //   currentPlayer = 'O';
    //   console.log('its player1 turns');
    // } else if (currentPlayer === 'O') {
    //   currentPlayer = 'X';
    //   console.log('its player2 turns');
    // }


}


function changePlayer() { 
     if (moves % 2 === 0) { player1 = true;
     console.log('its player1 turn');
     moves++
      player2 = false
   } else {
     player2 === true;
     console.log('its player2 turn');
     moves++
     player1 = false;
   }
}

    function rollDice () {
      const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
        const side3 = Math.floor( Math.random() * 6 ) + 1;
       
        const diceSide1 = document.getElementById( 'dice1' );
        const diceSide2 = document.getElementById( 'dice2' );
        const diceSide3 = document.getElementById( 'dice3' );
        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
        diceSide3.innerHTML = side3;
       
        let newData = [side1, side2, side3];        
        test(newData);
        changePlayer()
    }
  
  buttonRollDice.addEventListener( 'click', rollDice, false );

}, false);

function test(newData) {
  console.log('here is your new data not sorted:', newData);

  newData.sort(function(a, b) {
    return a - b;
  });
console.log('sorted: ',newData);
if (newData[0]=== 4 && newData[1]===5 && newData[2]===6) {
  console.log('winner!');
} else {
  console.log('no value');
}
if (newData[0]=== 1 && newData[1]===2 && newData[2]===3) {
   console.log('loser');
} else {
  console.log('no value');

}

}





// }  (newData[0]===1 && newData[1]===2 && newData[2]===3);{
//      console.log ('loser');
// }









