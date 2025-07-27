import parse from './index';

test('Parse expression', () => {
    const source = `(x y z)`;
    const result = parse(source);
    expect(result).toEqual([['x', 'y', 'z']]);
});
