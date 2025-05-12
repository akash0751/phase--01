const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'task_Temp');
fs.access(directoryPath, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(directoryPath, (err) => {
      if (err) {
        console.error('Error creating directory:', err);
        return;
      }
      console.log('Directory "task_Temp" created successfully!');
    });
  } else {
    console.log('The directory "task_Temp" already exists.');
  }
});
