// File Module ASYNCHRONOUS
// requires a callback =>
// need to add UTF coding, otherwise return values will be number buffers
// read first text file, assign it to a result, read second, assign it to the result

const { readFile, writeFile } = require('fs')

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if (err){
            console.log(err)
            return
        }
        console.log('done with this task')
    }
        )
} )
})

console.log('starting the next task')
