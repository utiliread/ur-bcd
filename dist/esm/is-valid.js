export function isValid(bcd) {
    while (bcd) {
        if ((bcd & 0xf) > 0x9) {
            return false;
        }
        bcd >>= 4;
    }
    return true;
}
//# sourceMappingURL=is-valid.js.map