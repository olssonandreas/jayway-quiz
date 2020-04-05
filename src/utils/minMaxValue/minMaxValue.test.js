import { minValue, maxValue } from './minMaxValue';

test('minValue returns lowest value from array', () => {
  const array = [1, 2, 3, 4];
  expect(minValue(array)).toBe(1);
});

test('minValue returns null if no array as parameter', () => {
  expect(minValue('not an array')).toBe(null);
});

test('maxValue returns highest value from array', () => {
  const array = [1, 2, 3, 4];
  expect(maxValue(array)).toBe(4);
});

test('maxValue returns null if no array as parameter', () => {
  expect(maxValue('not an array')).toBe(null);
});
