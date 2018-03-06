"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decode(bcd) {
    var binary = tryDecode(bcd);
    if (binary === false) {
        throw Error;
    }
    return binary;
}
exports.decode = decode;
function tryDecode(bcd) {
    var nibbles = [];
    while (bcd) {
        var nibble = bcd & 0xf;
        if (nibble <= 0x9) {
            nibbles.push(nibble);
        }
        else {
            return false;
        }
        bcd >>= 4;
    }
    return nibbles.reduceRight(function (binary, nibble) { return binary * 10 + nibble; }, 0);
}
exports.tryDecode = tryDecode;
//# sourceMappingURL=decode.js.map