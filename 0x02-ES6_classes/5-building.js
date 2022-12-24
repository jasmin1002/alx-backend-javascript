export default class Building {
  constructor(sqft) {
    if (typeof sqft !== "number" || isNaN(sqft))
      throw TypeError("Square feet must a number");
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage !== "function"
    )
      throw Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    this._sqft = sqft;
  }
  get sqft() {
    return this._sqft;
  }
}
