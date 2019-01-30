export function encode(binary: number) {
    if (binary < 0) {
        throw Error();
    }

    let bcd = 0;
    let smallerPowerOf10 = Math.pow(10, Math.floor(Math.log10(binary)));

    while (smallerPowerOf10 >= 1) {
        bcd = (bcd << 4) >>> 0; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_%28Zero-fill_right_shift%29

        while (binary >= smallerPowerOf10) {
            binary -= smallerPowerOf10;
            bcd++;
        }

        smallerPowerOf10 /= 10;
    }

    return bcd;
}