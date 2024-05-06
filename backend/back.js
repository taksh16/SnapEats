const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
const info =require('./info.js')
require('./userdb');
const Users = require('./connection');

app.post("/",async(req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})
app.post("/senddata",async(req,res)=>{
    let userinfo = req.body?.data;
    // const {firstname,lastname,email,streetname,city,state,zipcode,country,phone}=userinfo
    let result = await info.create({firstname:userinfo?.firstname,lastname:userinfo?.lastname,email:userinfo?.email,streetname:userinfo?.streetname,city:userinfo?.city,state:userinfo?.state,zipcode:userinfo?.zipcode,country:userinfo?.country,phone:userinfo?.phone});
    result.save({validteBeforeSave:false})
    res.send(result);
})
app.listen(4002);