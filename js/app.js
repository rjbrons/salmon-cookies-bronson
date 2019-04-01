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

  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible) + this.minCust;
  },

  getCookiesPerHour: function() {
    this.hoursOfOperation.forEach(() => {
      this.cookiesPerHour.push(
        this.generateCustomerLoad() * this.cookiesPerSale
      );
    });
  },

  calculateTotalCookies: function(perHourArray) {
    let total = 0;
    perHourArray.forEach(item => (total += item));
    return total;
  }
};
