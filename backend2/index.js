const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
const info=require('../backend/info')
require('../backend/info');
const Info = require('./connect');

app.post("/senddata",async(req,res)=>{
    let userinfo = req.body?.data;
    const {firstname,lastname,email,streetname,city,state,zipcode,country,phone}=userinfo
    let result = await info.create({firstname,lastname,email,streetname,city,state,zipcode,country,phone});
    result.save({validteBeforeSave:false})
    res.send(result);
})

app.listen(4000);