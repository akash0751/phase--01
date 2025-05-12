const fs = require('fs');
const path = require('path');

const sourceFilePath = 'source.txt';
const destinationFilePath = 'destination.txt';
fs.writeFile(destinationFilePath, 'Hii ...This is from destination  file', (err) => {
  if (err) {
    console.error('Error creating the destination file:', err);
    return;
  }
     console.log(`destination file "${destinationFilePath}" created successfully!`);
  fs.access(sourceFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
        if (err) {
          console.error('Error copying the file:', err);
          return;
        }

        console.log(`File copied successfully to "${destinationFilePath}"`);
        fs.access(sourceFilePath, fs.constants.F_OK, (err) => {
          if (err) {
            console.error(`The file "${sourceFilePath}" does not exist.`);
          } else {
            console.log(`The file "${sourceFilePath}" exists after copying.`);
          }
        });
      });
    } else {
      console.log('The source file already exists.');
    }
  });
});
