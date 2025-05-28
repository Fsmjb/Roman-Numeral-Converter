const output = document.querySelector("#output");
const input = document.querySelector("#number");

function convertToRoman(num) {
    const romanMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let result = "";
    for (const key in romanMap) {
        while (num >= romanMap[key]) {
            result += key;
            num -= romanMap[key];
        }
    }
    return result;
}

function convertNumber() {
    const number = parseInt(input.value, 10);

    if (!input.value || isNaN(number)) {
        output.innerHTML = "Please enter a valid number";
        return;
    }
    if (number < 1) {
        output.innerHTML = "Please enter a number greater than or equal to 1.";
        return;
    }
    if (number > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }

    output.innerHTML = convertToRoman(number);
}