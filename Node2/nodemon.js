const fs = require("fs");
const { spawn } = require("child_process");

const args = process.argv.slice(2);

let files = [];
let script = "";

for (let i = 0; i < args.length; i++) {
    if (args[i] === "--watch") {
        files.push(args[i + 1]);
        i++;
    } else {
        script = args[i];
    }
}

if (!script) {
    console.log("Вкажіть файл для запуску");
    process.exit(1);
}

let processNode;

function start() {
    if (processNode) {
        processNode.kill();
    }

    console.log(`Запуск ${script}`);

    processNode = spawn("node", [script], {
        stdio: "inherit"
    });
}

start();

for (const file of files) {
    fs.watch(file, () => {
        console.log(`\nФайл ${file} змінено`);
        start();
    });
}

process.on("SIGINT", () => {
    if (processNode) {
        processNode.kill();
    }

    process.exit();
});