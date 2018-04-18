const fs = require('fs-extra');
const path = require('path');

const dirBuild = './build/';
const dirJs = './build/js';
const dirImg = './build/img';

fs.ensureDir(dirBuild)
.then(() => {
  console.log(`${dirBuild} has created!`)
})
.catch(err => {
  console.error(err)
})

fs.ensureDir(dirJs)
.then(() => {
  console.log(`${dirJs} has created!`)
})
.catch(err => {
  console.error(err)
})

fs.ensureDir(dirImg)
.then(() => {
  console.log(`${dirImg} has created!`)
})
.catch(err => {
  console.error(err)
})

// copy main-compiled.js
fs.copy('./src/js/main-compiled.js', './build/js/main-compiled.js', err => {
  if (err) return console.error(err)

  console.log('main.js copied!')
}) // copies file


// copy all html files from src to build
const searchRecursive = function(dir, pattern) {
  // This is where we store pattern matches of all files inside the directory
  let results = [];

  // Read contents of directory
  fs.readdirSync(dir).forEach(function (dirInner) {
    // Obtain absolute path
    dirInner = path.resolve(dir, dirInner);

    // Get stats to determine if path is a directory or a file
    const stat = fs.statSync(dirInner);

    // If path is a directory, scan it and combine results
    if (stat.isDirectory()) {
      results = results.concat(searchRecursive(dirInner, pattern));
    }

    // If path is a file and ends with pattern then push it onto results
    if (stat.isFile() && dirInner.endsWith(pattern)) {
      results.push(dirInner);
    }
  });

  return results;
};

const files = searchRecursive('./src', '.html'); // replace dir and pattern
                                                // as you seem fit
// //copy the $file to $dir2
const copyFile = (file, dir2) => {

  //gets file name and adds it to dir2
  const f = path.basename(file);
  const source = fs.createReadStream(file);
  const dest = fs.createWriteStream(path.resolve(dir2, f));

  source.pipe(dest);
  // source.on('end', function() { console.log('Succesfully copied'); });
  source.on('error', function(err) { console.log(err); });
};

//example, copy file1.htm from 'test/dir_1/' to 'test/'
// copyFile('./src/index.html', './build/');
// copyFile(files, './build/');

files.forEach(file => {
  console.log(file);
  copyFile(file, './build/');
});

// copy main-compiled.js
fs.copy('./src/img', './build/img', err => {
  if (err) return console.error(err)

  console.log('./build/img copied!')
}) // copies file
