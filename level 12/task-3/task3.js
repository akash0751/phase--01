const fs = require('fs');

const filePath = "sample.txt";
const contentToAppend = 'Form moved to sample again.\n';

fs.appendFile(filePath, contentToAppend, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Content successfully appended to', filePath);
    }
});
