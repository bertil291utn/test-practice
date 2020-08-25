import calculator from './calculator';

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  it('substracts two numbers', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });
  it('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  it('throughs an error if the 2nd number is a negative or 0', () => {
    expect(calculator.divide(10,0)).toEqual(Infinity);
  });
});