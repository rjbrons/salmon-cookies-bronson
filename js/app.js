'use strict';

var allStores = [];
var hoursOfOperation = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];
var totalCookiesByHour = [];

//initialize totalCookiesByHour array with zeros
for (let i = 0; i < hoursOfOperation.length; i++) {
  totalCookiesByHour.push(0);
}

function CookieStore(storeName, displayName, minCust, maxCust, cookiesPerSale) {
  this.storeName = storeName;
  this.displayedName = displayName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerHour = [];
  this.cookiesPerSale = cookiesPerSale;
  this.custPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);

  // methods follow:

  //generate a random number of customers per hour based on location min/max
  this.generateCustomerLoad = function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible + 1) + this.minCust;
  };
  //generate cookies per hour based on customers per hour and hours of operation
  this.getCookiesPerHour = function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let numCookies = Math.ceil(
        this.generateCustomerLoad() * this.cookiesPerSale
      );
      this.cookiesPerHour.push(numCookies);
      this.totalCookies += numCookies;
      totalCookiesByHour[i] += numCookies;
    }
  };
  //add its row to the table
  this.render = function() {
    let parentTable = document.getElementById('storesTable');
    let tblRow = document.createElement('tr');
    modifyDom(tblRow, 'th', this.displayedName);
    for (let i = 0; i < hoursOfOperation.length; i++) {
      modifyDom(tblRow, 'td', this.cookiesPerHour[i]);
    }
    modifyDom(tblRow, 'td', this.totalCookies);
    parentTable.appendChild(tblRow);
  };

  this.getCookiesPerHour();
} //end of CookieStore contstructor

//helper function to add an element to the dom
var modifyDom = function(
  parent,
  childType,
  content,
  tagId = null,
  tagClass = null
) {
  let parentEl = parent;
  let childEl = document.createElement(childType);
  if (tagId) {
    childEl.setAttribute('id', tagId);
  } else if (tagClass) {
    childEl.setAttribute('class', tagClass);
  }
  childEl.innerText = content;
  parentEl.appendChild(childEl);
};

//instantiate the cookie stores
new CookieStore('firstPike', 'First and Pike', 23, 65, 6.3);
new CookieStore('seaTac', 'SeaTac Airport', 3, 24, 1.2);
new CookieStore('seaCenter', 'Seattle Center', 11, 38, 3.7);
new CookieStore('capHill', 'Capitol Hill', 20, 38, 2.3);
new CookieStore('alki', 'Alki', 2, 16, 4.6);

//helper function to toal all cookies at all locations
function sumAllCookies() {
  let sum = 0;
  totalCookiesByHour.forEach(value => (sum += value));
  return sum;
}

//function to create the table by calling functions that create the parts of the table
function createTable() {
  createTableHeader();
  allStores.forEach(item => item.render());
  createTableFooter();
}

//creates the table header row
function createTableHeader() {
  let parentTable = document.getElementById('storesTable');
  let tblHeader = document.createElement('thead');
  modifyDom(tblHeader, 'th', 'Locations');
  for (let i = 0; i < hoursOfOperation.length; i++) {
    modifyDom(tblHeader, 'th', hoursOfOperation[i]);
  }
  modifyDom(tblHeader, 'th', 'Totals');
  parentTable.appendChild(tblHeader);
}

//creates footer row
function createTableFooter() {
  let parentTable = document.getElementById('storesTable');
  let tblFooter = document.createElement('tfoot');
  modifyDom(tblFooter, 'th', 'Totals');
  for (let i = 0; i < totalCookiesByHour.length; i++) {
    modifyDom(tblFooter, 'th', totalCookiesByHour[i]);
  }
  modifyDom(tblFooter, 'th', sumAllCookies());
  parentTable.appendChild(tblFooter);
}

createTable();

//event handling for form
let formEl = document.getElementById('storeInput');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.target);
  new CookieStore(
    event.target[1].value,
    event.target[2].value,
    event.target[3].value,
    event.target[4].value,
    event.target[5].value
  );
  let tableEl = document.getElementById('storesTable');
  tableEl.innerHTML = '';
  createTable();
});
