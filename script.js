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
})
