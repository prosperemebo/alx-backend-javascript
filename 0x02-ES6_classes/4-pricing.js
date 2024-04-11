import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
	if (typeof amount === 'number') this._amount = amount;
	else throw new TypeError('Amount ')
  }
}
