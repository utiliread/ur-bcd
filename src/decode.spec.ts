import { expect } from 'chai';
import { tryDecode } from './decode';

describe('tryDecode', () => {
    it('should decode when input is valid bcd', () => {
        const result = tryDecode(0x11223344);

        expect(result).to.equal(11223344);
    });

    it('should return false when invalid bcd', () => {
        const result = tryDecode(0x11223a44);

        expect(result).to.equal(false);
    })
})