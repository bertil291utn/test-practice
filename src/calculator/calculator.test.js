import calculator from './calculator';

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('subtracts two numbers', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });

  it('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('returns an infinity error if the second number is a negative or 0', () => {
    expect(calculator.divide(10, 0)).toEqual(Infinity);
  });
});
