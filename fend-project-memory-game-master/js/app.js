/*
 * Create a list that holds all of your cards
 */
 let cards = document.getElementsByClassName('card');
let symbols =[];
let openingCards = [];
let movesNum=0;
let matchedCardsToWin=0;
let stars=document.querySelector('.stars');
let moves=document.querySelector('.moves');
let panel = document.querySelector("section");
const restart=document.querySelector('.restart');
let time = document.createElement("div");
let period;
let seconds=0;
let minutes=0;
let endTime;
let dialogStars;
let dialogElement =document.createElement("dialog");
let closeElement =document.createElement("button");



theGame();
timer();
function timer(){
  //styling the timer to put it in the same line of rating stara and reset button
  time.classList.add("timer");
  time.style.display="inline";
  time.style.margin="1em";
  panel.appendChild(time); // appending timer to tag section(that has 'panel' class )
}
function theGame(){ // to make it easy when call it for the popup (replay button)
  movesNum=0;
  moves.innerHTML=movesNum;
  stars.innerHTML=`<li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>`;
  time.innerHTML=0+" minutes, "+0+" seconds";
for(const card of cards){
  card.classList.remove('open','match','show');//reset the cards status
  symbols.push(card.children[0].className);// assign symbol for each card
  card.addEventListener('click', showingCard);//when click on card
}
cardShuffling();
}
//startTimer();


function startTimer(){// when player make first click
 period = setInterval(function(){
  time.innerHTML=minutes+" minutes, "+seconds+" seconds";//put the value of minutes and seconds in DOM
        seconds++;
        if(seconds == 60){// increment minutes and zeroing the seconds
          seconds = 0;
          minutes++;
        }
    },1000);

}

dialogElement.setAttribute("id","modal");//set id and name for dialog tag
document.body.appendChild(dialogElement);// appending dialog tag to body tag
dialogElement.style.cssText='width:440px;height:500px;background-color:white;text-align:center;';
  function closing() { // for closing popup Window
        dialogElement.close();
      }
  function rePlay(){ // if palyer want to play again after win
    dialogElement.close();
    theGame();
    //reset();
  }
function popUpWindow(){
  endingTime();
  dialogStars=stars.innerHTML;//stored resuling stard of rating from HTML and
  // next line put html code and storing the resulting value in it
  dialogElement.innerHTML=`<h2> Congratulation ,you win </h2>,
  <p> The time spent is:<div><strong>${endTime}</strong></div></p>,
  <p> your rating is:<div><strong>${dialogStars}</strong></div></p>
  <button class="rePlay">Play again</button>
  <button class="close">Close</button>`;

  let closeButton = document.querySelector(".close");
  closeButton.addEventListener('click', closing);// to make event when player click close button
  let playButton = document.querySelector(".rePlay");
  playButton.addEventListener('click', rePlay);// to make event when player click close button
  dialogElement.showModal(); //showing the popup window
    }


function endingTime(){//stopping the timer and assign time spent in game
  clearInterval(period);
  endTime = time.innerHTML;
}

function cardShuffling(){
  symbols=shuffle(symbols); // symbols shuffling
  let i = 0;
for(const card of cards){
   card.children[0].className = symbols[i]; // reordring in DOM after shuffling
  i++;
}
}

function showingCard(){
  if (openingCards.length<2){//chekcing each card clicked
    this.classList.add('show','open');
    openingCards.push(this);
    setTimeout(matchingCard, 1500);
  }
}

function matchingCard(){
  if (openingCards.length==2){
    let cardOne = openingCards[0];
    let cardTwo = openingCards[1];
     let classCardOne = cardOne.children[0].className;
     let classCardTwo = cardTwo.children[0].className;
        if(classCardOne===classCardTwo){// make sure the 2 cards have the same class name
            cardOne.classList.toggle('match');
            cardTwo.classList.toggle('match');
            matchedCardsToWin=matchedCardsToWin+2;

                                       }
         else {
            cardOne.classList.remove('open','show');//reset the cards
            cardTwo.classList.remove('open','show');
              }
              openingCards=[];
              if(matchedCardsToWin==16){//16 the number of cards
                popUpWindow();
              }
              openingCards=[];//zeroing the opening Cards array when they not matched
                             }
                             movingCounter();

                      }
function starRating(){

  if(movesNum>20 && movesNum<=40){
    stars.innerHTML=`<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;

  }
  else if (movesNum>40)
    stars.innerHTML= `<li><i class="fa fa-star"></i></li>`;
  }

moves.innerHTML=0;
function movingCounter(){
  movesNum=movesNum+1;
  if(movesNum==1)
  startTimer();
  moves.innerHTML=movesNum;
  starRating();
}

restart.addEventListener('click',reset);

function reset(){
for(const card of cards){
  cardShuffling();
  openingCards=[];
  card.classList.remove('open','match','show');//reset the cards
  movesNum=0;
  moves.innerHTML=movesNum;
  stars.innerHTML=`<li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>`;
  time.innerHTML=0+" minutes, "+0+" seconds";
  clearInterval(period);

}

}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
