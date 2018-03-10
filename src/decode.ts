export function decode(bcd: number) {
    let binary = tryDecode(bcd);

    if (binary === false) {
        throw Error;
    }

    return binary;
}

export function tryDecode(bcd: number) {
    let nibbles: number[] = [];

    while (bcd) {
        let nibble = bcd & 0xf;

        if (nibble <= 0x9) {
            nibbles.push(nibble);
        }
        else {
            return false;
        }

        bcd >>>= 4;
    }

    return nibbles.reduceRight((binary, nibble) => binary * 10 + nibble, 0);
}