import arrayAnalysis from './array-analysis';

const array = [1, 2, 3, 4];
test('returns a object', () => {
  expect(arrayAnalysis(array)).toEqual({
    average: 2.5,
    length: 4,
    max: 4,
    min: 1,
  });
});

test('it is a object with only numbers', () => {
  expect(arrayAnalysis(array)).not.toEqual({
    average: '2.5',
    length: 4,
    max: '^^&',
    min: 1,
  });
});
