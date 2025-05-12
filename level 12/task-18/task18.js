const fs = require('fs');
const path = require('path');

const sourceDir = './FileDir';
const targetDir = './targetDir';
function createTestDirectories() {
  fs.mkdirSync(sourceDir, { recursive: true });
  fs.writeFileSync(path.join(sourceDir, 'file1.txt'), 'This is a source file.');
  fs.writeFileSync(path.join(sourceDir, 'file2.txt'), 'This is a source file.');
  fs.writeFileSync(path.join(sourceDir, 'file3.txt'), 'This is a source file.');
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'file1.txt'), 'This is a target file.');
  fs.writeFileSync(path.join(targetDir, 'file4.txt'), 'This is a target file.');
  console.log('Directories and files created.');
  syncDirectories(); 
}
function syncDirectories() {
  fs.readdir(sourceDir, (err, sourceFiles) => {
    if (err) {
      console.error('Error reading source directory:', err);
      return;
    }

    fs.readdir(targetDir, (err, targetFiles) => {
      if (err) {
        console.error('Error reading target directory:', err);
        return;
      }

      let filesCopied = 0;
      let filesDeleted = 0;
      sourceFiles.forEach(file => {
        const sourceFilePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, file);

        fs.stat(sourceFilePath, (err, sourceStat) => {
          if (err) {
            console.error(`Error getting stats for file ${sourceFilePath}:`, err);
            return;
          }
          fs.stat(targetFilePath, (err, targetStat) => {
            if (err || sourceStat.mtime > targetStat.mtime) {
              fs.copyFile(sourceFilePath, targetFilePath, (err) => {
                if (err) {
                  console.error(`Error copying file ${file}:`, err);
                  return;
                }
                console.log(`Copied ${file} from source file to target.`);
                filesCopied++;
              });
            }
          });
        });
      });
      targetFiles.forEach(file => {
        if (!sourceFiles.includes(file)) {
          const targetFilePath = path.join(targetDir, file);
          fs.unlink(targetFilePath, (err) => {
            if (err) {
              console.error(`Error deleting file ${file}:`, err);
              return;
            }
            console.log(`Deleted ${file} from target.`);
            filesDeleted++;
          });
        }
      });
      setTimeout(() => {
        console.log(`\nSync Summary:`);
        console.log(`Files copied: ${filesCopied}`);
        console.log(`Files deleted: ${filesDeleted}`);
      }, 1000); 
    });
  });
}
createTestDirectories();
