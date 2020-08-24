'use strict';

var mainNav = document.querySelector('.page-nav');
var pageNav = mainNav.querySelector('.page-nav__top');
var headerToggle = mainNav.querySelector('.page-nav-top__toggle');
mainNav.classList.remove('page-nav--nojs');
pageNav.classList.remove('page-nav-top--nojs');

var toogleMenu = function () {
  if (pageNav.classList.contains('page-nav-top--closed')) {
    pageNav.classList.remove('page-nav-top--closed');
    pageNav.classList.add('page-nav-top--opened');
    mainNav.classList.remove('page-nav--closed');
    mainNav.classList.add('page-nav--opened');
  } else {
    pageNav.classList.add('page-nav-top--closed');
    pageNav.classList.remove('page-nav-top--opened');
    mainNav.classList.add('page-nav--closed');
    mainNav.classList.remove('page-nav--opened');
  }
};

var headerToggleClickHandler = function () {
  toogleMenu();
};

headerToggle.addEventListener('click', headerToggleClickHandler);
