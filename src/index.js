module.exports = function toReadable(number) {
    let onesArray = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let arrayAfterOnes = [
        "null",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tensArray = [
        "null",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numberStr = number.toString();
    let handrStr = "hundred";

    if (number < 10) {
        return onesArray[number];
    }

    if (numberStr.length === 2) {
        if (10 < number && number < 20) {
            return arrayAfterOnes[numberStr[1]];
        } else if (9 < number && number < 91 && numberStr[1] === "0") {
            return tensArray[numberStr[0]];
        }
        return `${tensArray[numberStr[0]]} ${onesArray[numberStr[1]]}`;
    } else if (numberStr.length === 3) {
        if (numberStr[1] === "0" && numberStr[2] === "0") {
            return `${onesArray[numberStr[0]]} ` + handrStr;
        } else if (numberStr[1] === "0") {
            return (
                `${onesArray[numberStr[0]]} ` +
                handrStr +
                ` ${onesArray[numberStr[2]]}`
            );
        } else if (numberStr[2] === "0") {
            return (
                `${onesArray[numberStr[0]]} ` +
                handrStr +
                ` ${tensArray[numberStr[1]]}`
            );
        } else if (numberStr[1] === "1" && Number(numberStr[2]) > 0) {
            return (
                `${onesArray[numberStr[0]]} ` +
                handrStr +
                ` ${arrayAfterOnes[numberStr[2]]}`
            );
        }
        return (
            `${onesArray[numberStr[0]]} ` +
            handrStr +
            ` ${tensArray[numberStr[1]]} ${onesArray[numberStr[2]]}`
        );
    }
};
