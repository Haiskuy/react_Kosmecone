const { error } = require('console')
const fs=require('fs')
const { start } = require('repl')
const lol=fs.readFileSync('index.html','utf-8')
let products=JSON.parse(fs.readFileSync('products.json','utf-8'))
const http=require('http')

// http.createServer((req,res)=>{
//     if (req.url=='/gatau'){
//         res.writeHead(200,{'content-type':'text/html','my-header':'hello world'})
//         res.write(lol.replace('{{%hhh%}}',`you are in ${req.url}`))
//     }
//     else if(req.url=='/ewewe'){
//         res.writeHead(200,{'content-type':'text/html','my-header':'hello world'})
//         console.log(products)
//     }
//     else{
//         res.write(req.url)
//     }
//     res.end()

// }).listen(5000,()=>{console.log('server has startedKO')})

// // setInterval(()=>{console.log('memek')},2000)
// // setTimeout(()=>{console.log('kontol')},0)



// console.log(start)
// fs.readFile('something.txt','utf8',(error,result)=>{!error&& console.log(result)})



const server=http.createServer().listen(8000,()=>{console.log('server has created')})

server.on('request',(req,res)=>{
    if (req.url=='/gatau'){
        res.writeHead(200,{'content-type':'text/html','my-header':'hello world'})
        res.write(lol.replace('{{%hhh%}}',`you are in ${req.url}`))
    }
    else if(req.url=='/ewewe'){
        res.writeHead(200,{'content-type':'text/html','my-header':'hello world'})
        console.log(products)
    }
    else{
        res.write(req.url)
    }
    res.end()
})

fs.ReadStream