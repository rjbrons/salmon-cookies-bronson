'use strict';

let firstPike = {
  minCust: 23,
  maxCust: 65,
  hoursOfOperation: [],
  cookiePerSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],

  calculateTotalCookies: function(perHourArray) {
    let total = 0;
    perHourArray.forEach(item => (total += item));
    return total;
  }
};
