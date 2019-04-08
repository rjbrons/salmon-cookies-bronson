'use strict';

console.log('JS change working');

function doThis() {
  console.log('This event fired.');
}

var storeWindow = document.getElementById('stores');

function toggleStores(e) {
  e.preventDefault();
  if (storeWindow.style.display === 'none') {
    storeWindow.style.display = 'block';
  } else {
    storeWindow.style.display = 'none';
  }
}

var testEl = document.getElementsByTagName('body')[0];
var storeButton = document.getElementsByClassName('buttons')[2];

testEl.addEventListener('click', toggleStores);
// storeWindow.addEventListener('click', toggleStores);
storeButton.addEventListener('click', toggleStores);
