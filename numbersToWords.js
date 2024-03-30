function numberToWords(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid input');
    }
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['thousand', 'million'];

    if (number === 0) return units[0];

    const parts = [];

    // Handle decimal part
    if (number % 1 !== 0) {
        let decimalPart = Math.round((number % 1) * 100);
    if (decimalPart % 10 === 0) {
        decimalPart = decimalPart / 10;
    }
        return `${numberToWords(Math.floor(number))} point ${numberToWords(decimalPart)}`;
    }

    // Handle integer part
    let unit = 0;
    while (number > 0) {
        if (number % 1000 !== 0) {
            let chunk = number % 1000;
            let str = '';

            if (chunk < 100) {
                str = convertTensAndUnits(chunk);
            } else {
                str = `${units[Math.floor(chunk / 100)]} hundred `;
                let remainder = chunk % 100;
                if (remainder) {
                    str += `and ${convertTensAndUnits(remainder)}`;
                }
            }

            if (unit) {
                str += ` ${scales[unit - 1]} `;
            }

            parts.unshift(str.trim());
        }
        number = Math.floor(number / 1000);
        unit++;
    }

    return parts.join(', ');

    function convertTensAndUnits(number) {
        if (number < 20) return units[number];
        return tens[Math.floor(number / 10)] + (number % 10 ? '-' + units[number % 10] : '');
    }
}

module.exports = numberToWords;
