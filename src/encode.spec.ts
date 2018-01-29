import { encode } from './encode';
import { expect } from 'chai';

describe('encode', () => {
    it('should encode to bcd', () => {
        const result = encode(11223344);

        expect(result).to.equal(0x11223344);
    });
})