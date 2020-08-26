import reverseString from './reverse-string';

test('returns palindrome text', () => {
  const palindrome = 'level';
  expect(reverseString(palindrome)).toMatch(palindrome);
});

test('returns a reverse text', () => {
  const inputText = 'Hello world!';
  expect(reverseString(inputText)).toMatch(/!dlrow olleH/);
});
