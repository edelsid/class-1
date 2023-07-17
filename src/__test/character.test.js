import Daemon from '../daemon';

const dataList = [
  ['Y', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Yddramorral', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Fafnir', 1, 'Такого класса не существует'],
];

const handler = test.each(dataList);

handler('testing errors', (name, type, expected) => {
  expect(() => new Daemon(name, type)).toThrow(expected);
});
