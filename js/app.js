'use strict';

let firstPike = {
  storeName: 'firstPike',
  displayedName: '1st and Pike',
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
  cookiesPerSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  //generate a random number of customers per hour based on location min/max
  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible + 1) + this.minCust;
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
  },
  //displays store data in list
  renderStore: function() {
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
    liEl.innerText = `TOTAL: ${this.calculateTotalCookies(
      this.cookiesPerHour
    )} cookies`;
    ulParent.appendChild(liEl);
  }
};

let seaTac = {
  storeName: 'seaTac',
  displayedName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
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
  cookiesPerSale: 1.2,
  cookiesPerHour: [],
  custPerHour: [],
  //generate a random number of customers per hour based on location min/max
  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible + 1) + this.minCust;
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
  },
  //displays store data in list
  renderStore: function() {
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
    liEl.innerText = `TOTAL: ${this.calculateTotalCookies(
      this.cookiesPerHour
    )} cookies`;
    ulParent.appendChild(liEl);
  }
};

let seaCenter = {
  storeName: 'seaCenter',
  displayedName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
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
  cookiesPerSale: 3.7,
  cookiesPerHour: [],
  custPerHour: [],
  //generate a random number of customers per hour based on location min/max
  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible + 1) + this.minCust;
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
  },
  //displays store data in list
  renderStore: function() {
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
    liEl.innerText = `TOTAL: ${this.calculateTotalCookies(
      this.cookiesPerHour
    )} cookies`;
    ulParent.appendChild(liEl);
  }
};

let capHill = {
  storeName: 'capHill',
  displayedName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
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
  cookiesPerSale: 2.3,
  cookiesPerHour: [],
  custPerHour: [],
  //generate a random number of customers per hour based on location min/max
  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible + 1) + this.minCust;
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
  },
  //displays store data in list
  renderStore: function() {
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
    liEl.innerText = `TOTAL: ${this.calculateTotalCookies(
      this.cookiesPerHour
    )} cookies`;
    ulParent.appendChild(liEl);
  }
};

let alki = {
  storeName: 'alki',
  displayedName: 'Alki',
  minCust: 2,
  maxCust: 16,
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
  cookiesPerSale: 4.6,
  cookiesPerHour: [],
  custPerHour: [],
  //generate a random number of customers per hour based on location min/max
  generateCustomerLoad: function() {
    let custPossible = this.maxCust - this.minCust;
    return Math.floor(Math.random() * custPossible + 1) + this.minCust;
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
  },
  //displays store data in list
  renderStore: function() {
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
    liEl.innerText = `TOTAL: ${this.calculateTotalCookies(
      this.cookiesPerHour
    )} cookies`;
    ulParent.appendChild(liEl);
  }
};

firstPike.renderStore();
seaTac.renderStore();
seaCenter.renderStore();
capHill.renderStore();
alki.renderStore();
