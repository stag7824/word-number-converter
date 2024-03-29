const baseNumbers = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
    "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
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
    let powerCondition=false;
    let power = 0;
    let tensCondition = false;
    while (index != 0) {
        index--;
        // Start from last and increment your way up
        if(powerCondition && baseNumbers[wordArray[index]]!=undefined){
            let temp=baseNumbers[wordArray[index]]*power;
            currentNumber+=temp;
            power=0;
            powerCondition=false;
            continue;
        }
        if (baseNumbers[wordArray[index]] != undefined) {
            currentNumber += baseNumbers[wordArray[index]];
        }
        else if (addOns[wordArray[index]] != undefined) {
            power = addOns[wordArray[index]];
            powerCondition=true;
        }
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