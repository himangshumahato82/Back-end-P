const express=require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost/AlienDBex'

const app =express()
mongoose.connect(url, {useNewUrlParser:true})

const con=mongoose.connection
con.on('open',()=>{
    console.log('connect......')
})

const alienRouter=require('./Routers/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, ()=>{
    console.log("himangshu")
})