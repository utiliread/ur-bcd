export function isValid(bcd) {
    while (bcd) {
        if ((bcd & 0xf) > 0x9) {
            return false;
        }
        bcd >>= 4;
    }
    return true;
}
export function encode(binary) {
    if (binary < 0) {
        throw Error();
    }
    return 2;
}
export function tryDecode(bcd) {
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
export function decode(bcd) {
    let binary = tryDecode(bcd);
    if (binary === false) {
        throw Error;
    }
    return binary;
}
//# sourceMappingURL=bcd.js.map