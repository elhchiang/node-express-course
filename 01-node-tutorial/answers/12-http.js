// this module allows you to set up a web server
// two parameters req for incoming client requests via web brower and webpage
// res is response is what we're sending back
// go to web browser localhost:5000 and the node js results will be there, not in VS Code Terminal

const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('Welcome To The Home Page!')
      } else if (req.url === '/about') {
        res.end('A Brief History About Us')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We cannot find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
    })
    
    server.listen(3000)
    