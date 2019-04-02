'use strict';

var alLStores = [];

function CookieStore(storeName, displayName, minCust, maxCust, cookiesPerSale) {
  this.storeName = storeName;
  this.displayedName = displayName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hoursOfOperation = [
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
    this.hoursOfOperation.forEach(() => {
      this.cookiesPerHour.push(
        Math.ceil(this.generateCustomerLoad() * this.cookiesPerSale)
      );
      this.totalCookies += this.cookiesPerHour[this.cookiesPerHour.length - 1];
    });
  };
  //render the store to the page
  this.renderStore = function() {
    let ulParent = document.createElement('ul');
    ulParent.innerText = this.displayedName;
    ulParent.setAttribute('id', this.storeName);
    let parentEl = document.getElementById('storeInfo');
    parentEl.appendChild(ulParent);
    this.getCookiesPerHour();
    for (let i = 0; i < this.hoursOfOperation.length; i++) {
      let liEl = document.createElement('li');
      liEl.innerText = `${this.hoursOfOperation[i]}: ${
        this.cookiesPerHour[i]
      } cookies.`;
      ulParent.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.innerText = `TOTAL: ${this.totalCookies} cookies`;
    ulParent.appendChild(liEl);
  };
}

var modifyDom = function(parent, child, content, parentId) {
  //get parent element
  let parentEl = document.getElementById(parent);
  parent.setAttribute('id', parentId);
  //create child element
  let childEl = document.createElement(child);
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

alLStores.forEach(item => item.renderStore());
