const fs = require('fs');
const filePath = 'sample.txt';

fs.writeFile(filePath, 'This is a test file to be deleted.', (err) => {
  if (err) {
    console.error('Error creating the test file:', err);
    return;
  }

  console.log(`sample file "${filePath}" created successfully!`);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`The file "${filePath}" does not exist.`);
      return;
    }
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting the file:', err);
        return;
      }

      console.log(`File "${filePath}" deleted successfully!`);
    });
  });
});
