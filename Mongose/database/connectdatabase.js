const  mongoose = require('mongoose')

async function createdatabase(){

    const result=await mongoose.connect('mongodb://127.0.0.1:27017/employees')
    return result;
}

module.exports=createdatabase