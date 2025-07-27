import { describe, test, expect } from '@jest/globals';
import parse from './index';

describe('parse', () => {
    test('parses a simple expression', () => {
        const source = '(a b c)';
        const result = parse(source);
        expect(result).toEqual([['a', 'b', 'c']]);
    });

    test('parses multiple expressions', () => {
        const source = `(a b c) (x y z)`;
        const result = parse(source);
        expect(result).toEqual([
            ['a', 'b', 'c'],
            ['x', 'y', 'z'],
        ]);
    });
});
