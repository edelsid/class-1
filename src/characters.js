export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа слишком короткое/длинное');
    }
    this.name = name;
    if (typeof type !== 'string') {
      throw new Error('Класс персонажа должен быть словом');
    }
    this.type = type;
    this.level = 1;
    this.health = 100;
  }
}
