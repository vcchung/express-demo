const { response } = require('express')
const express=require('express')
const app=express()
app.listen(3000, ()=>{
    console.log('start to listen on port 3000')
})

app.get('/', (req, response)=>{
    response.send('hello world!')
})