const http=require('http')

const server=http.createServer((req,res)=>{
    res.write('<h1>Nishant Kumar</h1>')
})

server.listen(4000)