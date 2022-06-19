class User {
  constructor() {
    this.name = null;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
export default new User();