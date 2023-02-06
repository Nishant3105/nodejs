const path=require('path')

const express = require('express')
const bodyParser=require('body-parser')

const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const contactusRouter=require('./routes/contact-us')

const app=express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRouter)
app.use('/shop',shopRouter)
app.use(contactusRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'))
})

app.listen(3000)