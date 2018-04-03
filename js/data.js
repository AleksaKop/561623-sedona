var active = document.querySelector('.search-hotels__section--active')
var button = document.querySelector('.search-hotels__button')
var data = document.querySelector('.search-hotels__section')
var date_arrial = data.querySelector('[name=arrial__date]')
var date_departure = data.querySelector('[name=departure__date]')
var amount_adult = data.querySelector('[name=adult__amount]')
var amount_children = data.querySelector('[name=children__amount]')
var form = document.querySelector('.search-hotels__form')
      
active.classList.remove('search-hotels__section--active');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  data.classList.toggle('js-search-hotels__section');
  date_arrial.focus();
});
        
form.addEventListener('submit', function (evt) {
  if (!date_arrial.value || !date_departure.value || !amount_adult.value || !amount_children.value) {
    evt.preventDefault();
    console.log('Нужно ввести данные');
  }
});
        
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (data.classList.contains('js-search-hotels__section')) {
      data.classList.remove('js-search-hotels__section');
    }
  }
});