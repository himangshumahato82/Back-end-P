const express=require('express')

const {getData, createEmployees, updateemployeeById, deleteEmployee} =require('../employees');

const router=express.Router();


router.get('/employees', async(req,res)=>{
    console.log("himangshu")
    try{
   const employees= await getData();
   return res.send({
    data:employees
   })
}catch(err){
    console.log(err)
    return res.status(500).send({
        message:"Unexpected Error"
    })
}

})

router.post('/employees', async(req,res)=>{
    try{
    const employee= await createEmployees(req.body);
    return res.send({
     data:employee
    })
}catch(err){
    console.log(err)
return res.status(500).send({
    message:"Unexpected error"
})
}
 })
 
 router.patch('/employee/:id', async(req,res)=>{
    try{
    const employee= await updateemployeeById(req.params.id,req.body);
    return res.send({
     data:employee
    })
}catch(err){
    console.log(err)
return res.status(500).send({
    message:"Unexpected error"
})
}
 })
 router.delete('/employee/:id', async(req,res)=>{
    try{
    const employee= await deleteEmployee(req.params.id);
    return res.send({
     data:employee
    })
}catch(err){
    console.log(err)
return res.status(500).send({
    message:"Unexpected error"
})
}
 })
 module.exports=router;
