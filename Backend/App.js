let exp = require("express");
let app = exp();
let rout = require('./routefile')
let mong = require('mongoose')
let cors = require('cors')
let mw = require('morgan')
require('dotenv/config');
app.use(exp.json())
app.use(cors())
app.use(mw('dev'))


app.use('/info',rout)

app.listen(3600,function(err){
    console.log("server created")
})


mong.connect(process.env.My_Data,function(err){
    console.log('db connected successfully')
})
