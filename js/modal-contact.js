'use strict';

var MIN_NAME_LENGTH = 3;
var askQuestionButton = document.querySelector('.page-nav-social__form');
var locationButtonClose = document.querySelector('.modal-contact__close');
var contactWrapper = document.querySelector('.modal-contact');
var contactForm = document.querySelector('.modal-contact__form');
var modalWrapper = contactWrapper.querySelector('.modal-wrapper');
var fieldName = contactWrapper.querySelector('.modal-contact__input--name');
var fieldEmail = contactWrapper.querySelector('.modal-contact__input--email');
var checkboxField = contactWrapper.querySelector('.modal-contact__checkbox:checked');
var fieldSubmit = contactWrapper.querySelector('.modal-contact__submit');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';
try {
  storageName = localStorage.getItem('fieldName');
  storageEmail = localStorage.getItem('fieldEmail');
} catch (err) {
  isStorageSupport = false;
}

var hidecontactWrapper = function () {
  contactWrapper.classList.add('hidden');
  modalWrapper.classList.add('hidden');
};

var showcontactWrapper = function () {
  contactWrapper.classList.remove('hidden');
  modalWrapper.classList.remove('hidden');
  setFocusField();
  if (storageName) {
    fieldName.value = storageName;
  }
  if (storageEmail) {
    fieldEmail.value = storageEmail;
  }
};

var opencontactWrapperHandler = function (evt) {
  showcontactWrapper();
  document.addEventListener('keydown', escapeKeydownContactHandler);
};

var closeFormOnButton = function () {
  hidecontactWrapper();
};

var escapeKeydownContactHandler = function (evt) {
  if (evt.key === 'Escape') {
    hidecontactWrapper();
  }
};

var validateName = function () {
  if (fieldName.validity.valueMissing) {
    fieldName.setCustomValidity('Обязательное поле');
  } else if (fieldName.value.length < MIN_NAME_LENGTH) {
    fieldName.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + ' символов');
  } else {
    fieldName.setCustomValidity('');
  }
};

var validateEmail = function () {
  if (fieldEmail.validity.valueMissing) {
    fieldEmail.setCustomValidity('Обязательное поле');
  } else {
    fieldEmail.setCustomValidity('');
  }
};

var isFieldChecked = function () {
  if (checkboxField.checked === true) {
    fieldSubmit.disabled = false;
    fieldSubmit.style.background = '#f28A0f';
    fieldSubmit.classList.add('modal-contact__submit--hover');
  } else {
    fieldSubmit.disabled = true;
    fieldSubmit.style.background = '#b8b8b8';
    fieldSubmit.classList.remove('modal-contact__submit--hover');
  }
};

var contactFormChangeHandler = function () {
  isFieldChecked();
};

var fieldNameInputHandler = function () {
  validateName();
};

var fieldEmailInputHandler = function () {
  validateEmail();
};

var setFocusField = function () {
  fieldName.focus();
};

locationButtonClose.addEventListener('click', closeFormOnButton);
askQuestionButton.addEventListener('click', opencontactWrapperHandler);
document.removeEventListener('keydown', escapeKeydownContactHandler);
fieldName.addEventListener('input', fieldNameInputHandler);
fieldEmail.addEventListener('input', fieldEmailInputHandler);
contactForm.addEventListener('change', contactFormChangeHandler);
validateName();
validateEmail();
isFieldChecked();
