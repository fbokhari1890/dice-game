window.addEventListener( 'DOMContentLoaded', function () {
  const buttonRollDice = document.querySelector( '.roll' );

let p1Wins = 0;
let p2Wins = 0;
let p1;
let p2;
let p1Turn = true;


function main() {
  // console.log('fahim')
  if(p1Turn) {
    p1 = getDice();
    p1Turn = false
    // TODO: show dice on frontend
  } else {
    p2 = getDice();
    // TODO: show dice on frontend

    let turnResult = decideWinner(p1, p2);

    if (turnResult === 'ROLL_AGAIN') 
      p1Turn = !p1Turn;
    else if (turnResult === 'P1_WINS') {
      // TODO: do something to show p1 wins
    } else {
      // TODO: do something to show p2 wins

    }
  }
}


function getDice () {
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

      return hand      

    }
  
  buttonRollDice.addEventListener( 'click', main, false );

}, false);









function decideWinner(p1, p2) {
  let p1Bucket = getBucket(p1);
  let p2Bucket = getBucket(p2);
  console.log(p1Bucket,p2Bucket);

  if (p1Bucket === 'WIN') {
    if  (p2Bucket === 'WIN'){
       return 'ROLL_AGAIN'
    }
    return 'P1_WINS';
    console.log('player1 wins');
    document.getElementById('p1status').innerHTML= 'winner';

  } 

  if (p1Bucket === 'NOTHING') {
    console.log('player1 gets nothing');
    if (p2Bucket === 'NOTHING') {
      document.getElementById('p1status').innerHTML='roll-again';
      document.getElementById('p2status').innerHTML='roll-again';
  };
     if (p2Bucket === 'LOSE'){
      document.getElementById('p1status').innerHTML='winner';
      document.getElementById('p2status').innerHTML='loser';
    } 
    else {
      document.getElementById('p1status').innerHTML='loser';
    document.getElementById('p2status').innerHTML= 'winner';
    }
  }

  if (p1Bucket === 'LOSE') {
    if (p2Bucket === 'LOSE') return 'ROLL_AGAIN';
    else return 'P2_WINS';
  } 

  if (p1Bucket === 'TRIPLE') {
    if (p2Bucket === 'WIN') return 'P2_WINS';
    else if (p2Bucket === 'NOTHING' || p2Bucket === 'LOSE') return 'P1_WINS';
    else {
      if (p1[0] === p2[0]) return 'ROLL_AGAIN';
      else if (p1[0] > p2[0]) return 'P1_WINS'
      else 'P2_WINS';
      console.log('player2 wins');
    }
  } 
}

function getBucket(hand) {
  console.log('player1hand', hand);
  hand.sort(function(a, b) {
    return a - b;
  });
  console.log('player2hand ',hand);
  if (hand[0]=== 4 && hand[1]===5 && hand[2]===6) {
    console.log('4 is winner!');
    return 'WIN';
  } else if (hand[0]=== 1 && hand[1]===2 && hand[2]===3) {
    console.log('lose!')
    return 'LOSE'
  } else if(hand[0]=== hand[1] && hand[0]=== hand[2]) {
    console.log('Tripple!');
    return 'TRIPLE';
  } else {
    return 'NOTHING';
  }
}