'use strict';

let firstPike = {
  minCust: 23,
  maxCust: 65,
  hoursOfOperation: [
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
  ],
  cookiePerSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  //generate a random number of customers per hour based on location min/max
  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible) + this.minCust;
  },
  //generate cookies per hour based on customers per hour and hours of operation
  getCookiesPerHour: function() {
    this.hoursOfOperation.forEach(() => {
      this.cookiesPerHour.push(
        Math.ceil(this.generateCustomerLoad() * this.cookiesPerSale)
      );
    });
  },
  //calculate total daily cookies summing cookie sales for each hour
  calculateTotalCookies: function(perHourArray) {
    let total = 0;
    perHourArray.forEach(item => (total += item));
    return total;
  }
};

let ulEl = document.getElementById('firstPike');
for (let i = 0; i < firstPike.hoursOfOperation.length; i++) {
  let liEl = document.createElement('li');
  liEl.innerText(
    `${firstPike.hoursOfOperation[i]}: ${firstPike.cookiesPerHour[i]} cookies.`
  );
  ulEl.appendChild(liEl);
}
let liEl = document.createElement('li');
liEl.innerText(`TOTAL: ${firstPike.calculateTotalCookies()} cookies`);
ulEl.appendChild(liEl);
