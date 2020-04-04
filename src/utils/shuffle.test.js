import shuffle from './shuffle';

test('shuffle function returns same array length', () => {
  const array = ['1', '2', '3', '4'];
  expect(shuffle(array)).toHaveLength(array.length);
});

test('shuffle function returns null if no array as parameter', () => {
  expect(shuffle('not an array')).toBe(null);
});
