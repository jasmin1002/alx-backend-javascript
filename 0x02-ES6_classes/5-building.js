export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number' || Number.isNaN(sqft)) {
      throw TypeError('Square feet must a number');
    }
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
