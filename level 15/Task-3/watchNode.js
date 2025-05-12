const chokidar = require("chokidar");
const path = require("path");
const organizeFiles = require("./organizer");

const targetDir = path.join(__dirname, "test_folder");

console.log(" Watching for new files...");
chokidar.watch(targetDir, { ignored: /(^|[\/\\])\../ }).on("add", (filePath) => {
    console.log(`New file detected: ${path.basename(filePath)}`);
    organizeFiles(targetDir);
});
