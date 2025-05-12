const fs = require('fs');
const path = require('path');

const jsonFilePath = './file.json';
function createJsonFile() {
  const data = [
    { id: 1, name: 'Arnav', age: 20 },
    { id: 2, name: 'Bhargav', age: 21 },
    { id: 3, name: 'Dinesh', age: 20 }
  ];
  fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error creating JSON file:', err);
      return;
    }
    console.log('JSON file created successfully.');
    modifyJsonFile(); 
  });
}
function modifyJsonFile() {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      jsonData.push({ id: 4, name: 'Eigen', age: 21 });

      fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error('Error writing modified JSON to file:', err);
          return;
        }
        console.log('JSON file updated successfully.');
      });

    } catch (parseErr) {
      console.error('Error parsing JSON data:', parseErr);
    }
  });
}
createJsonFile();
