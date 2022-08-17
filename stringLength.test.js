const stringLength = require('./stringLength');
const string = 'testing';

test('string length of testing', () => {
  expect(stringLength(string)).toBe(string.length);
});

test('exception for string', () => {
  expect(stringLength(string)).not.toEqual(0);
  expect(stringLength(string)).not.toBeGreaterThan(10);
});