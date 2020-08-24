'use strict';

var orderQuestTitle = document.querySelector('.booking__title-selected');
var orderButtonBack = document.querySelector('.button-back');
var orderGenre = document.querySelector('.booking__breadcrumbs-mobile');
var bookingCheckoutDate = document.querySelector('.booking__checkout-date');
var bookingCheckoutTime = document.querySelector('.booking__checkout-time');
var bookingCheckoutPrice = document.querySelector('.booking__checkout-price');

var setTextValues = function () {
  orderButtonBack.setAttribute('href', localStorage.questLink);
  orderGenre.textContent = localStorage.questGenre;
  orderQuestTitle.textContent = localStorage.questName;
};

// TIME
var bookingTime = document.querySelector('.booking__time');
var bookingTimeClickHandler = function () {
  getSelectedTime();
  getSelectedPrice();
  updateText();
};
var getSelectedTime = function () {
  window.textTime = document.querySelector('.booking__time-radio:checked').parentElement.querySelector('.booking__time-text').textContent;
  return window.textTime;
};
var getSelectedPrice = function () {
  window.textPrice = parseInt(document.querySelector('.booking__time-radio:checked').parentElement.querySelector('.booking__price').textContent, 10);
  return window.textPrice;
};

// DATE
var optionList = document.querySelector('#select-dropdown');
var optionListDefault = optionList.options[optionList.selectedIndex].textContent;

var bookingSelect = document.querySelector('.booking__select-dropdown');
var getSelectedData = function () {
  window.textDate = document.querySelector('.select-dropdown__button').querySelector('.select-dropdown').textContent;
  optionListDefault = window.textDate;
  return optionListDefault;
};
var bookingSelectClickHandler = function () {
  getSelectedData();
  updateText();
};

var updateText = function () {
  bookingCheckoutDate.textContent = optionListDefault;
  bookingCheckoutTime.textContent = window.textTime;
  bookingCheckoutPrice.textContent = window.textPrice;
};

bookingSelect.addEventListener('click', bookingSelectClickHandler);
bookingTime.addEventListener('click', bookingTimeClickHandler);
setTextValues();
getSelectedTime();
getSelectedPrice();
setTimeout(getSelectedData, 1000);
updateText();
