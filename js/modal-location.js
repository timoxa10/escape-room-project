'use strict';

var locationButton = document.querySelector('.page-nav-top__city');
var buttonClose = document.querySelector('.modal-location__close');
var locationForm = document.querySelector('.modal-location');
var modalWrapper = document.querySelector('.modal-wrapper');
var contactForm = document.querySelector('.modal-contact');

var hideForm = function () {
  locationForm.classList.add('hidden');
  modalWrapper.classList.add('hidden');
};

var showForm = function () {
  locationForm.classList.remove('hidden');
  modalWrapper.classList.remove('hidden');
};

var openLocationFormHandler = function (evt) {
  showForm();
  document.addEventListener('keydown', escapeKeydownHandler);
};

var closeFormOnButton = function () {
  hideForm();
};

var escapeKeydownHandler = function (evt) {
  if (evt.key === 'Escape') {
    hideForm();
  }
};

buttonClose.addEventListener('click', closeFormOnButton);
locationButton.addEventListener('click', openLocationFormHandler);
document.removeEventListener('keydown', escapeKeydownHandler);

window.onclick = function (evt) {
  if (evt.target.classList.contains('modal-wrapper')) {
    locationForm.classList.add('hidden');
    modalWrapper.classList.add('hidden');
    contactForm.classList.add('hidden');
    modalWrapper.classList.add('hidden');
  }
};
