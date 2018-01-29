"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encode(binary) {
    if (binary < 0) {
        throw Error();
    }
    let bcd = 0;
    let smallerPowerOf10 = Math.pow(10, Math.floor(Math.log10(binary)));
    while (smallerPowerOf10 >= 1) {
        bcd <<= 4;
        while (binary >= smallerPowerOf10) {
            binary -= smallerPowerOf10;
            bcd++;
        }
        smallerPowerOf10 /= 10;
    }
    return bcd;
}
exports.encode = encode;
//# sourceMappingURL=encode.js.map