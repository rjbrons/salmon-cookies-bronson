'use strict';

var alLStores = [];
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
  alLStores.push(this);

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
      console.log(numCookies);
      this.cookiesPerHour.push(numCookies);
      this.totalCookies += numCookies;
      totalCookiesByHour[i] += numCookies;
    }
  };

  this.getCookiesPerHour();
}

//helper function to add an element to the dom
var modifyDom = function(parent, childType, content) {
  //get parent element
  let parentEl = parent;
  //create child element
  let childEl = document.createElement(childType);
  //add content to child
  childEl.innerText = content;
  //append child to parent
  parentEl.appendChild(childEl);
};

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
  alLStores.forEach(item => createTableRow(item));
  createTableFooter();
}

//creates the table header row
function createTableHeader() {
  let parentTable = document.getElementById('storesTable');
  let tblHeader = document.createElement('thead');
  modifyDom(tblHeader, 'th', 'Locations');
  for (let i = 0; i < hoursOfOperation.length; i++) {
    modifyDom(tblHeader, 'td', hoursOfOperation[i]);
  }
  modifyDom(tblHeader, 'th', 'Totals');
  parentTable.appendChild(tblHeader);
}

//creates the row of data for a given store
function createTableRow(store) {
  let parentTable = document.getElementById('storesTable');
  let tblRow = document.createElement('tr');
  modifyDom(tblRow, 'th', store.displayedName);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    modifyDom(tblRow, 'td', store.cookiesPerHour[i]);
  }
  modifyDom(tblRow, 'td', store.totalCookies);
  parentTable.appendChild(tblRow);
}

//creates footer row
function createTableFooter() {
  let parentTable = document.getElementById('storesTable');
  let tblFooter = document.createElement('tfoot');
  modifyDom(tblFooter, 'th', 'Totals');
  for (let i = 0; i < totalCookiesByHour.length; i++) {
    modifyDom(tblFooter, 'td', totalCookiesByHour[i]);
  }
  modifyDom(tblFooter, 'td', sumAllCookies());
  parentTable.appendChild(tblFooter);
}

createTable();
