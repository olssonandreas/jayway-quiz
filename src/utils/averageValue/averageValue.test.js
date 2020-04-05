import averageValue from './averageValue';

test('averageValue returns average value from array of numbers', () => {
  const array = [1, 2, 3, 4];
  expect(averageValue(array)).toBe(Math.round(2.5));
});

test('shuffle function returns null if no array as parameter', () => {
  expect(averageValue('not an array')).toBe(null);
});
