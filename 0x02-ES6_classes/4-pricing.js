import Currency from "./3-currency.js";
export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number" || isNaN(amount))
      throw TypeError("Amount must be a number");
    if (typeof currency !== "object" && typeof currency.name !== "string")
      throw TypeError("Not a currency");

    this._amount = amount;
    this._currency = currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== "number" || isNaN(newAmount))
      throw TypeError("Amount must be a number");
    this._amount = newAmount;
  }
  get amount() {
    return this._amount;
  }

  set currency(nCurrency) {
    if (typeof nCurrency !== "object" && typeof nCurrency.name !== "string")
      throw TypeError("Not a currency");
    this._currency = nCurrency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number" || isNaN(amount))
      throw TypeError("Amount must be a number");
    if (typeof conversionRate !== "number" || isNaN(conversionRate))
      throw TypeError("conversion rate must a number");
    return amount * conversionRate;
  }
}
