'use strict';

document.addEventListener('DOMContentLoaded', createSelect, false);

function createSelect() {
  var select = document.getElementsByTagName('select'),
  liElement,
  ulElement,
  optionValue,
  optionText,
  selectDropdown,
  elementParentSpan;

  for (var select_i = 0, len = select.length; select_i < len; select_i++) {
    select[select_i].style.display = 'none';
    wrapElement(document.getElementById(select[select_i].id), document.createElement("div"), select_i);
    for (var i = 0; i < select[select_i].options.length; i++) {
      liElement =  document.createElement("li");
      optionValue = select[select_i].options[i].value;
      optionText = document.createTextNode(select[select_i].options[i].text);
      liElement.className = 'select-dropdown__list-item';
      liElement.setAttribute('data-value',optionValue );
      liElement.appendChild(optionText);
      ulElement.appendChild(liElement);
      liElement.addEventListener('click', function () {
        displyList(this);
      }, false);
    }
  }

  function wrapElement(el, wrapper, i) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    var buttonElement = document.createElement("button"),
    spanElement = document.createElement("span"),
    spanText = document.createTextNode("22 марта");
    ulElement = document.createElement("ul");
    wrapper.className = 'select-dropdown select-dropdown--'+ i;
    buttonElement.className = 'select-dropdown__button select-dropdown__button--' + i;
    buttonElement.setAttribute('data-value', 'march-22');
    spanElement.className = 'select-dropdown select-dropdown--'+ i;
    ulElement.className = 'select-dropdown__list select-dropdown__list--'+ i;
    ulElement.id = 'select-dropdown__list-'+ i;
    wrapper.appendChild(buttonElement);
    spanElement.appendChild(spanText);
    buttonElement.appendChild(spanElement);
    wrapper.appendChild(ulElement);
  }

  function displyList (element) {
  if (element.tagName == 'BUTTON') {
    selectDropdown = element.parentNode.getElementsByTagName('ul');
    for (var i = 0, len = selectDropdown.length; i < len; i++) {
      selectDropdown[0].classList.toggle("active");
    }
  } else if (element.tagName == 'LI'){
    var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
    selectElement(selectId.id, element.getAttribute('data-value'));
    elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
    element.parentNode.classList.toggle("active");
    elementParentSpan[0].textContent = element.textContent;
    elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
    }
  }

  function selectElement (id, valueToSelect) {
    var element = document.getElementById(id);
    element.value = valueToSelect;
    element.setAttribute('selected', 'selected');
  }

  var buttonSelect = document.getElementsByClassName('select-dropdown__button');
  for (var i = 0, len = buttonSelect.length; i < len; i++) {
    buttonSelect[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      displyList(this);
    }, false);
  }
}
