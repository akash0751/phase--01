const fs = require('fs'); 

const content = 'Hello!! This is a sample Node';
fs.writeFile('sample.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err); 
  } else {
    console.log('File has been written successfully! and verified sucessfully'); 
}});
