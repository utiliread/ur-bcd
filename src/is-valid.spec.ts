import { expect } from 'chai';
import { isValid } from './is-valid';

describe('isValid', () => {
    it('should return true when valid', () => {
        const result = isValid(0x11223344);

        expect(result).to.equal(true);
    });

    it('should return false when not valid', () => {
        const result = isValid(0x11223a44);

        expect(result).to.equal(false);
    });
});