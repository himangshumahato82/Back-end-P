const mongoose=require('mongoose')
const createdatabase = require('./database/connectdatabase')

createdatabase
const students=mongoose.model('students',{
    name:String,
    gender:String,
    dateOfBirth:Date,
    admissionNumber:Number,
    graduated:Boolean,
    batch:String,
    courses:[String]
})
/**
students.findById
students.find
students.create
students.insertMany
students.updateOne
students.updateMany
students.findByIdAndUpdate
students.deleteOne
students.deleteMany
students.findByIdAndDelete
*/
async function test(){
console.log('DB quaries through students model')

 /** 
let student=await students.create({
    name:'suku',
    dateOfBirth: new Date('2001-04-05'),
    gender:"female",
    admissionNumber:470,
    graduated:false,
    batch:'pt-wb-8',
    courses:['js','java','dsa']

})

 


 student =await students.findById('64081e00676b7b7e99f3e3ad')
  student=await students.findOne({
    name:'furkan',
   
 })

await students.updateMany({
    batch:'pt-wb-8',
},{
   
    $set:{
        graduated:false,
    }
})
*/

let result=await students.deleteOne({
    _id: new ObjectId("640825e9956ed5e7a388ffba") 
})
console.log()
let student=await students.find({
    batch:'pt-wb-8'
})


console.log(student)
}



connectDatabase()
.then(test)
.catch((err)=>{
console.log('galat',err.message)
})
