const fs=require('fs')

const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url === '/'){
         fs.readFile("message.txt",'utf8',function(err, data) {
             if (err) {
                 console.log(err);
             }
         const message=data
         console.log(message)
         res.write('<html>')
         res.write(`<body>${message}</body>`)
         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>submit</button></input></form></body>')
         res.write('</html>')
         return res.end()
         })
     }
     else if(url === '/message' && method==="POST"){
         const body=[]
         req.on('data',(chunk)=>{
            body.push(chunk)
         })
         return req.on('end',()=>{
             const parsedBody=Buffer.concat(body).toString()
             const message=parsedBody.split('=')[1]
             fs.writeFile('message.txt', message, err=>{
                 res.statusCode=302
                 res.setHeader('Location','/')
                 //upar ke dono res.writeHead se bhi ho jaega res.writeHead(statuscode,{})
                 return res.end()
             })
         })
     }
     else{
         res.setHeader('Content-Type','text/html')
         res.write('<html>')
         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>submit</button></input></form></body>')
         res.write('</html>')
         res.end()
     }
 }

 module.exports = requestHandler