'use strict';

window.questName = document.querySelector('.quest-content__button').value;
window.questGenre = document.querySelector('.breadcrumbs__item').textContent;
window.questLink = window.location.href.split('/')[3];
localStorage.questName = window.questName;
localStorage.questGenre = window.questGenre;
localStorage.questLink = window.questLink;
