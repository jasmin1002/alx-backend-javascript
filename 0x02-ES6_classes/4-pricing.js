import Currency from './3-currency.js'
export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) {
      throw TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('Not a currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number' || Number.isNaN(newAmount)) {
      throw TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get amount() {
    return this._amount;
  }

  set currency(nCurrency) {
    if (!(nCurrency instanceof Currency)) {
      throw TypeError('Not a currency');
    }
    this._currency = nCurrency;
  }

  get currency () {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) {
      throw TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number' || Number.isNaN(conversionRate)) {
      throw TypeError('conversion rate must a number');
    }
    return amount * conversionRate;
  }
}