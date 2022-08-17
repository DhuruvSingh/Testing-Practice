const capitalize = require('./capitalize');

test('Capitalize First Letter', () => {
  expect(capitalize('ritik')).toBe('Ritik');
  expect(capitalize('DhuRuv')).toBe('Dhuruv');
  expect(capitalize('camiLO')).toBe('Camilo');
});