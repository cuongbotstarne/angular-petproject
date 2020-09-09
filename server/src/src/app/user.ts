export class User {
  constructor(_id = '', name = '', level = 0) {
    this._id = _id;
    this.name = name;
    this.level = level;
  }
  _id: string;
  name: string;
  level: Number;
}
