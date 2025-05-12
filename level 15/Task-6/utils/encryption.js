const fs = require('fs');
const crypto = require('crypto');

const encryptFile = (inputPath, outputPath, password, algorithm = 'aes-256-cbc') => {
  const key = crypto.scryptSync(password, 'salt', 32);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  output.write(iv); 

  input.pipe(cipher).pipe(output);

  output.on('finish', () => {
    console.log('File encrypted successfully!');
  });
};

module.exports = encryptFile;
