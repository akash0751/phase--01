const fs = require('fs');
const zlib = require('zlib');
const path = require('path');


const originalFilePath = './sample.txt';
const compressedFilePath = './sample.txt.gz';
const decompressedFilePath = './sample_decompressed.txt';
function createTestFile() {
  const content = 'The quick brown fox jumps over the lazy dog.';
  
  fs.writeFile(originalFilePath, content, (err) => {
    if (err) {
      console.error('Error creating test file:', err);
      return;
    }
    console.log('Test file created successfully.');
    compressFile();
  });
}
function compressFile() {
  const fileStream = fs.createReadStream(originalFilePath);
  const gzipStream = zlib.createGzip();
  const outputStream = fs.createWriteStream(compressedFilePath);

  fileStream
    .pipe(gzipStream) 
    .pipe(outputStream) 
    .on('finish', () => {
      console.log('File compressed successfully.');
      decompressFile(); 
    })
    .on('error', (err) => {
      console.error('Error during compression:', err);
    });
}
function decompressFile() {
  const fileStream = fs.createReadStream(compressedFilePath);
  const gunzipStream = zlib.createGunzip();
  const outputStream = fs.createWriteStream(decompressedFilePath);

  fileStream
    .pipe(gunzipStream) 
    .pipe(outputStream)
    .on('finish', () => {
      console.log('File decompressed successfully.');
      verifyDecompressedFile();
    })
    .on('error', (err) => {
      console.error('Error during decompression:', err);
    });
}
function verifyDecompressedFile() {
  fs.readFile(originalFilePath, 'utf8', (err, originalContent) => {
    if (err) {
      console.error('Error reading original file for verification:', err);
      return;
    }

    fs.readFile(decompressedFilePath, 'utf8', (err, decompressedContent) => {
      if (err) {
        console.error('Error reading decompressed file for verification:', err);
        return;
      }

      if (originalContent === decompressedContent) {
        console.log('Decompressed content matches the original content.');
      } else {
        console.error('Decompressed content does not match the original content.');
      }
    });
  });
}
createTestFile();
