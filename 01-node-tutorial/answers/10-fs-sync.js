// File Module Synchronosly or Blocking 
// provide path, set up content, choose encoding so Node knows how to read it

const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

// create a new txt file via node with the combined content of previous txt files. 
// running node code always overwrites any manual changes to text file
// flag:  appends new content to the existing content; flag : 'a' duplicates the content 

writeFileSync('./content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`, 
    { flag: 'a' }
    )

// adding tasks to the queue synchronously means each line has to be done before moving to the next

    console.log('done with this task')
    console.log('starting the next one')