const fs = require('fs');
const path = require('path');

function createTempFiles() {
  fs.mkdtemp(path.join(__dirname, 'sampleDir-'), (err, sampleDirPath) => {
    if (err) {
      console.error('Error creating temporary directory:', err);
      return;
    }

    console.log(`Temporary directory created at: ${sampleDirPath}`);
    const filesData = [
      { filename: 'sample1.txt', data: 'This is the content of sample 1.' },
      { filename: 'sample2.txt', data: 'This is the content of sample 2.' },
      { filename: 'sampl3.txt', data: 'This is the content of sample 3.' }
    ];
    filesData.forEach((file, index) => {
      const filePath = path.join(sampleDirPath, file.filename);
      fs.writeFile(filePath, file.data, (err) => {
        if (err) {
          console.error(`Error writing to file ${filePath}:`, err);
          return;
        }

        console.log(`File created at: ${filePath}`);
      });
    });
  });
}
createTempFiles();
