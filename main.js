import Card from './index.js'

let cardsCount = 6,
cardsNumberArray = [],
cardsArray = [],
firstCard = null,
secondCard = null

function newGame(container, cardsCount) {
  for (let i=1; i <= cardsCount/2; i++) {
  cardsNumberArray.push(i)
  cardsNumberArray.push(i)
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip))
  }

  function flip(card) {
    if(firstCard !== null && secondCard !== null) {
      if(firstCard.number != secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard=null
        secondCard=null

      }
     }

   if(firstCard == null) {
    firstCard = card
   } else {
    if(secondCard == null) {
     secondCard = card
    }
   }

   if(firstCard !== null && secondCard !== null) {
    if(firstCard.number == secondCard.number) {
      firstCard.success = true
      secondCard.success = true
      firstCard=null
      secondCard=null

    }
   }
    console.log(firstCard);
    console.log(secondCard);
  }
}


newGame(document.getElementById('game'), cardsCount)
