'use strict';

var storeWindow = document.getElementById('stores');

function toggleStores(e) {
  e.preventDefault();
  if (storeWindow.style.display === 'none') {
    storeWindow.style.display = 'block';
  } else {
    storeWindow.style.display = 'none';
  }
}
var storeButton = document.getElementsByClassName('buttons')[2];

storeButton.addEventListener('click', toggleStores);
