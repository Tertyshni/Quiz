const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "node_modules");

function showFiles(folder, level = 0) {
    const files = fs.readdirSync(folder);

    for (const file of files) {
        const fullPath = path.join(folder, file);
        const info = fs.statSync(fullPath);

        console.log("  ".repeat(level) + file);

        if (info.isDirectory()) {
            showFiles(fullPath, level + 1);
        }
    }
}

showFiles(folder);