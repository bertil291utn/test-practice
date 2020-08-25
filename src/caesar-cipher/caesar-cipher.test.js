import caesarCipher from './caesar-cipher';

test('it swaps by 3 letters from z to a', () => {
  const zToA = 'zyxwvutsrqponmlkjihgfedcba';
  expect(caesarCipher(zToA, 3)).toBe('cbazyxwvutsrqponmlkjihgfed');
});

test('returns shifted letters with same case', () => {
  const text = 'Defend The East Wall of the Castle';
  expect(caesarCipher(text, 1)).toEqual('Efgfoe Uif Fbtu Xbmm pg uif Dbtumf');
});

test('it doens\'t modify spaces or puntuations', () => {
  const text = 'Didn\'t forget? Punctuations!!';
  expect(caesarCipher(text, 2)).toEqual('Fkfp\'v hqtigv? Rwpevwcvkqpu!!');
});