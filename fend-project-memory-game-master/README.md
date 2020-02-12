# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Definition of the game](#Definition-The-Game)
* [Playing logic](#Playing-logic)
* [Codes need to explain](#codes-need-to-explain)


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


## Definition of the game
testing user's memory if can matching all cards

## Playing logic
- the timer is starting when make first click
- moves counter is increase by one for each click
- depending on moves counter the stars rating will decrease
- if select 2 cards (will checking if matched or not)
- if all cards is matched will stopping the timer and star rating and sure
 the moves counter, then appear popup window
- popup window has Congratulation text and the spent time in game and numbers of
moves with star star rating.
- from the popup window user can replay the game or close the window
- in addition the game page has restart button to restart the game

## Codes need to explain
### in popUpWindow function in app.js file:
  - creating (h1,p,div,strong,button) tags by adding them using .innerHTML
  - after that declare the buttons to make listener for each

```
.
.
  dialogElement.innerHTML=`<h2> Congratulation ,you win </h2>,
  <p> The time spent is:<div><strong>${endTime}</strong></div></p>,
  <p> your rating is:<div><strong>${dialogStars}</strong></div></p>
  <button class="rePlay">Play again</button>
  <button class="close">Close</button>`;

  let closeButton = document.querySelector(".close");
  closeButton.addEventListener('click', closing);// to make event when player click close button
  let playButton = document.querySelector(".rePlay");
  playButton.addEventListener('click', rePlay);// to make event when player click close button
    }
 .
 .
```
