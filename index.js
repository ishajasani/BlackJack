let sum = 0;
let cards = [];
let player = 
{
    name : "Ishaaa",
    chips: 140
}

let hasBlackJack = false;
let isAlive= false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

let message = " ";
function startGame()
 {
     isAlive = true;
     let firstCard = getRandomCard();
     let secondCard = getRandomCard();
     cards = [firstCard , secondCard ];
     sum = firstCard + secondCard;
     renderGame();
 }

function renderGame()
{
    cardsEl.textContent = "Cards : ";
    for(let i = 0 ; i<cards.length ; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum<=20)
        message = "Do you want to draw a new card ?"
    else if(sum === 21)
    {
        message = ("BlackJack 🥳🥳🥳!")
        hasBlackJack = true;
    }
    else {
        message = ("You're out of the game ")
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard()
{
    if(isAlive!=false && hasBlackJack!=true)
    {
        let card = getRandomCard();
        cards.push(card);
        sum = sum + card;
        renderGame();
    }
}

function getRandomCard()
{
    let randomNumber = (Math.floor(Math.random() * 13) + 1);
    if(randomNumber == 1)
        return 11;
    else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13)
        return 10; 
    else
        return randomNumber;
}

