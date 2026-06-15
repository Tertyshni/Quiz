"use strict"
//1
// function stringStats(str) {
//     let letters = 0;
//     let digits = 0;
//     let others = 0;

//     for (let char of str) {
//         if (/[a-zA-Zа-яА-ЯіїєґІЇЄҐ]/.test(char)) {
//             letters++;
//         } else if (/[0-9]/.test(char)) {
//             digits++;
//         } else {
//             others++;
//         }
//     }

//     console.log(`Літер: ${letters}`);
//     console.log(`Цифр: ${digits}`);
//     console.log(`Інших символів: ${others}`);
// }

// stringStats("Hello123!@#");

//2
// function NumbertoText(num) {
//     const units = ["нуль", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
//     const teens = ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
//     const tens = ["двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];

//     if (num < 10) {
//         return units[num];
//     } else if (num < 20) {
//         return teens[num - 10];
//     }
//     let result = tens[Math.floor(num / 10) - 2];
//     if (num % 10 > 0) {
//         result += " " + units[num % 10];
//     }
//     return result;
// }

// console.log(NumbertoText(24)); 

//3
// function transformString(str) {
//     let result = "";

//     for (let char of str) {
//         if (/[A-ZА-ЯІЇЄҐ]/.test(char)) {
//             result += char.toLowerCase();
//         } else if (/[a-zа-яіїєґ]/.test(char)) {
//             result += char.toUpperCase();
//         } else if (/[0-9]/.test(char)) {
//             result += "_";
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }

// console.log(transformString("HeLlo123!"));

//4
// function CamelCase(cssClass) {
//     let result = "";
//     for (let char of cssClass) {
//         if (char === "-") {
//             continue;
//         }
//         if (result.length > 0 && cssClass[result.length - 1] === "-") {
//             result += char.toUpperCase();
//         }
//         else {
//             result += char;
//         }
//     }
//     return result;
// }

// console.log(CamelCase("my-class-name"));

//5
// function Abbreviation(str) {
//     let result = "";
//     let words = str.split(" ");

//     for (let word of words) {
//         if (word.length > 0) {
//             result += word[0].toUpperCase();
//         }
//     }
//     return result;
// }

// console.log(Abbreviation("Hyper Text Markup Language"));

//6
// function Strings(strings) {
//     let result = "";
//     for (let str of strings) {
//         result += str
//     }
//     return result;
// }

// console.log(Strings(["Hello", " ", "World", "!"]));

//7
// function Calculate(expression) {
//     let operation;

//     if (expression.includes("+")) operation = "+";
//     else if (expression.includes("-")) operation = "-";
//     else if (expression.includes("*")) operation = "*";
//     else if (expression.includes("/")) operation = "/";

//     let [num1, num2] = expression.split(operation).map(Number);
//     switch (operation) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//     }
// }

// console.log(Calculate("10 + 5"));

//8
// function parseUrl(url) {
//     let obj = new URL(url);

//     console.log(`Протокол: ${obj.protocol.replace(":", "")}`);
//     console.log(`Домен: ${obj.hostname}`);
//     console.log(`Шлях: ${obj.pathname}`);
// }

// parseUrl("https://itstep.org/ua/about");

//9
// function Split(str, separator) {
//     let result = [];
//     let temp = "";

//     for (let char of str) {
//         if (char === separator) {
//             result.push(temp);
//             temp = "";
//         } else {
//             temp += char;
//         }
//     }

//     result.push(temp);

//     return result;
// }

// console.log(Split("10/08/2020", "/"));

//10
function print(template, args) {
    let result = template;

    for (let i = 0; i < args.length; i++) {
        result = result.replaceAll(`%${i + 1}`, args[i]);
    }

    console.log(result);
}

print("Today is %1 %2.%3.%4","Monday",10,8,2020);