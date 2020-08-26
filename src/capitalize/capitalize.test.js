import capitalize from './capitalize';

describe('capitalize text', () => {
  it('returns a capitalized first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('returns a capitalized first letter', () => {
    expect(capitalize('1 first place')).toBe('1 first place');
  });
});
