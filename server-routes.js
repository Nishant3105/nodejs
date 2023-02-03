const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url
    if(url === '/'){
        res.write('<h1>Nishant Kumar</h1>')
        return res.end()
    }
    if(url === '/home'){
        res.write('<h1>Welcome to home</h1>')
        return res.end()
    }
    if(url === '/about'){
        res.write('<h1>Welcome to about</h1>')
        return res.end()
    }
    if(url === '/node'){
        res.write('<h1>Welcome to node</h1>')
        return res.end()
    }
})

server.listen(3000)