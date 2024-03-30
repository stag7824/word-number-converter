const baseNumbers = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
    "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
}

const teens = {
    "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
    "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
    "eighteen": 18, "nineteen": 19

}

const tensAndMultiples = {
    "ten": 10,
    "twenty": 20, "thirty": 30,
    "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70,
    "eighty": 80, "ninety": 90,
}
const addOns = {

    "hundred": 100, "thousand": 1000,
    "million": 1000000, "billion": 1000000000
}




function wordsToNumber(words) {
    words = words.toLowerCase().replace(/-/g, " ").replace(/,/g, "").replace(" and", "");
    let wordArray = words.split(" ");
    let ArrayLength = wordArray.length;
    let index = ArrayLength;
    let currentNumber = 0;
    let powerCondition = false;
    let power = 0;
    let baseCondition = false;
    while (index > 0) {
        index--;
        // Start from last and increment your way up
        if (powerCondition && (baseNumbers[wordArray[index]] != undefined || teens[wordArray[index]] != undefined)) {
            let temp = 0;
            if (teens[wordArray[index]] != undefined && wordArray[index - 1] == "hundred") {
                temp = (teens[wordArray[index]] + (baseNumbers[wordArray[index - 2]] * 100)) * power;
                currentNumber += temp;
                index -= 2;
                powerCondition = false;
                continue;
            }

            if (teens[wordArray[index]] != undefined) {
                temp = teens[wordArray[index]] * power;
                currentNumber += temp;
                powerCondition = false;
                continue;
            }
            if (tensAndMultiples[wordArray[index - 1]] != undefined) {
                // check hundreds condition 
                if (wordArray[index - 2] == "hundred") {
                    temp = (baseNumbers[wordArray[index]] + tensAndMultiples[wordArray[index - 1]] + (baseNumbers[wordArray[index - 3]] * 100)) * power;
                    currentNumber += temp;
                    index -= 3;
                    powerCondition = false;
                    continue;
                }
                temp = (baseNumbers[wordArray[index]] + tensAndMultiples[wordArray[index - 1]]) * power;
                currentNumber += temp;
                index--;
                powerCondition = false;
                continue;
            }
            temp = baseNumbers[wordArray[index]] * power;
            currentNumber += temp;
            powerCondition = false;
            continue;
        }
        // Means I have a base number and should be added without any additional codition (first base number)
        if (baseNumbers[wordArray[index]] != undefined) {
            currentNumber += baseNumbers[wordArray[index]];
        }
        // If I have a teen number then add it to the current number (first teen Number)
        else if (teens[wordArray[index]] != undefined) {
            currentNumber += teens[wordArray[index]];

        }

        // If I have a power of 10 then set the power and set the condition to true
        else if (addOns[wordArray[index]] != undefined) {
            power = addOns[wordArray[index]];
            powerCondition = true;
        }

        // If I have a tens or multiples of 10 then add it to the current number 
        else if (tensAndMultiples[wordArray[index]] != undefined) {
            currentNumber += tensAndMultiples[wordArray[index]];
        }
        else {
            throw new Error("Invalid Input");
        }
    }
    return currentNumber;
}

module.exports = wordsToNumber;