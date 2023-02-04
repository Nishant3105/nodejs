const express = require('express')

const app=express()

app.use((req,res,next)=>{
  console.log('in the middleware')
  next()
})

app.use((req,res,next)=>{
  //res.send('<h1>hello from node.js</h1>')
  res.send({key1:'value'})
})

// const server=http.createServer(app)

// server.listen(3000)

app.listen(3000)