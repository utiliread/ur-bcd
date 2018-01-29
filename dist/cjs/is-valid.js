"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValid(bcd) {
    while (bcd) {
        if ((bcd & 0xf) > 0x9) {
            return false;
        }
        bcd >>= 4;
    }
    return true;
}
exports.isValid = isValid;
//# sourceMappingURL=is-valid.js.map