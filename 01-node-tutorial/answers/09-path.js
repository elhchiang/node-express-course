// allows us to interact with filepath easily

const path = require('path');

// console log what the system uses for a path separator, backslash \
console.log(path.sep)

// console log a normalized (even is there are extra slashese) file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// console log the base name i.e. file name
const base = path.basename(filePath)
console.log(base)

// console an absolute path i.e. the complete details from machine onwards
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)