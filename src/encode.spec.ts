import { encode } from './encode';
import { expect } from 'chai';

describe('encode', () => {
    it('should encode to bcd', () => {
        const result = encode(11223344);

        expect(result).to.equal(0x11223344);
    });

    it('should encode to bcd without overflow', () => {
        const result = encode(99999999);

        expect(result).to.equal(0x99999999);
    });
})