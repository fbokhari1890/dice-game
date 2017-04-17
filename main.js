

window.addEventListener( 'DOMContentLoaded', function () {
  const buttonRollDice = document.querySelector( '.roll' );

let p1Wins = 0;
let p2Wins = 0;
let p1;
let p2;
let p1Turn = true;

function main() {
  if(p1Turn) {
    p1 = getDice();
  } else {
    p2 = getDice();
    decideWinner();
  }
  p1Turn = !p1Turn;
}

function decideWinner() {
  let p1Bucket = getBucket(p1);
  let p2Bucket = getBucket(p2);
  if(p1Bucket > p2Bucket) {
    console.log('1  11 is the WINNER!!')
  }
  else if(p2Bucket > p1Bucket) {
    console.log('222  2 is the WINNER!!')
  }
  else if(p1Bucket !== 3){
    console.log('its a  tie!!')
  }
  else if(p1[0] > p2[0]) {
    console.log('1  11 is the WINNER!!')
  }
  else if(p2[0] > p1[0]) {
    console.log('2 22 is the WINNER!!')
  }
  else {
    console.log('its a  tie!!')
  }
}


function getBucket(hand) {
  console.log('hand:', hand);
  hand.sort(function(a, b) {
    return a - b;
  });
  console.log('sorted hand: ',hand);
  if (hand[0]=== 4 && hand[1]===5 && hand[2]===6) {
    console.log('4 is winner!');
    return 4;
  } 

  else if(hand[0]=== hand[1] && hand[0]=== hand[2]) {
    console.log('Tripple!');
    return 3
  }

}
//HERE ================
// function changePlayer() { 
//      if (moves % 2 === 0) { player1 = true;
//      console.log('its player1 turn');
//      moves++
//       player2 = false
//    } else {
//      player2 === true;
//      console.log('its player2 turn');
//      moves++
//      player1 = false;
//    }
// }

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
       
        let hand = [side1, side2, side3];    

        test(hand);
        changePlayer()
    }
  
  buttonRollDice.addEventListener( 'click', rollDice, false );

}, false);






function test(hand) {
  console.log('here is your new data not sorted:', hand);

  hand.sort(function(a, b) {
    return a - b;
  });
console.log('sorted: ',hand);
if (hand[0]=== 4 && hand[1]===5 && hand[2]===6) {
  console.log('winner!');
} else {
  console.log('no value');
}
if (hand[0]=== 1 && hand[1]===2 && hand[2]===3) {
   console.log('loser');
} else {
  console.log('no value');

}

}





// }  (hand[0]===1 && hand[1]===2 && hand[2]===3);{
//      console.log ('loser');
// }









