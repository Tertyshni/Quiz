const chalk = require("chalk");


if (args.length === 0) {
    console.error(chalk.red("Помилка: ви не передали параметри."));
    console.log(chalk.yellow("Якщо не знаєте доступні команди, введіть: help"));
    process.exit(1);
}

if (args[0] === "help") {
    console.log(chalk.cyan("\nДоступні команди:"));
    console.log(chalk.green("help") + " - показати всі команди");
    console.log(chalk.green("--sum") + " - сума чисел");
    console.log(chalk.green("--multiply") + " - множення чисел");
    console.log(chalk.green("--odd") + " - показати непарні числа");
    console.log(chalk.green("--even") + " - показати парні числа");

    console.log("\nПриклад:");
    console.log("node node.js 1 2 3 4 5 --sum --even");

    process.exit(0);
}

const numbers = [];
const commands = [];

for (const arg of args) {
    if (arg.startsWith("--")) {
        commands.push(arg);
    } else {
        const number = Number(arg);

        if (!isNaN(number)) {
            numbers.push(number);
        }
    }
}

if (numbers.length === 0) {
    console.error(chalk.red("Помилка: не передано жодного числа."));
    process.exit(1);
}

if (commands.includes("--sum")) {
    const sum = numbers.reduce((a, b) => a + b, 0);

    console.log(chalk.blue(`Сума - ${sum}`));
}

if (commands.includes("--multiply")) {
    const multiply = numbers.reduce((a, b) => a * b, 1);

    console.log(chalk.blue(`Добуток - ${multiply}`));
}

if (commands.includes("--odd")) {
    const odd = numbers.filter(number => number % 2 !== 0);

    console.log(chalk.blue(`Непарні числа - ${odd.join(", ")}`));
}

if (commands.includes("--even")) {
    const even = numbers.filter(number => number % 2 === 0);

    console.log(chalk.blue(`Парні числа - ${even.join(", ")}`));
}