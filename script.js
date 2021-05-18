'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldGame = document.querySelector('.btn--hold');
const btnRollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const score = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let playing = true;

btnRollDice.addEventListener('click', function() {
    if (playing) {
        const rand = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${rand}.png`;
        if (rand !== 1) {
            //Add to The cureent Score
            currentScore += rand;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore; //Need To be changed Later
        } else {
            //Switch The Player
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
});
// console.log(document.querySelectorAll('player--active').textContent);
btnHoldGame.addEventListener('click', function() {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            score[activePlayer];

        if (score[activePlayer] >= 20) {
            playing = false;
            dice.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
});

btnNewGame.addEventListener('click', function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    dice.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
});