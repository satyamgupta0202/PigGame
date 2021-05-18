'use strict';

const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const current1El = document.querySelector('#current--0');
const current2El = document.querySelector('#current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldGame = document.querySelector('.btn--hold');
const btnRollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

score1El.textContent = 0;
score2El.textContent = 0;
current1El.textContent = 0;
current2El.textContent = 0;
dice.classList.add('hidden');

btnRollDice.addEventListener('click', function() {
    let rand = Math.trunc(Math.random() * 6) + 1;
    dice.Imagesrc = `.dice-${rand}.png`;
    current0 += rand;
    document.querySelector('#current--0').textContent = current0;
});
// console.log(document.querySelectorAll('player--active').textContent);