const mongoose=require('mongoose')

const Employee=mongoose.model('Employee',{
    name:String,
    designation:String,
    dateOfBirth:Date,
    dateOfJoining:Date,
    hobbies:[String],
    profileImage:String,
    isMarried:Boolean,
    isVisuallyImpared:Boolean,
    phone:String,
    email:String,
    password:String

})

module.exports={
  Employee  
}