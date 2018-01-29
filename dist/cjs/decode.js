"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decode(bcd) {
    let binary = tryDecode(bcd);
    if (binary === false) {
        throw Error;
    }
    return binary;
}
exports.decode = decode;
function tryDecode(bcd) {
    let nibbles = [];
    while (bcd) {
        let nibble = bcd & 0xf;
        if (nibble <= 0x9) {
            nibbles.push(nibble);
        }
        else {
            return false;
        }
        bcd >>= 4;
    }
    return nibbles.reduceRight((binary, nibble) => binary * 10 + nibble, 0);
}
exports.tryDecode = tryDecode;
//# sourceMappingURL=decode.js.map