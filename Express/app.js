const express=require(`express`)
const {getData, createEmployees, updateemployeeById, deleteEmployee} =require('./employees');

const app=express();

app.use(express.json());

app.get('/employees', async(req,res)=>{
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

app.post('/employees', async(req,res)=>{
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
 app.patch('/employee/:id', async(req,res)=>{
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
 app.delete('/employee/:id', async(req,res)=>{
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




const port=process.argv[2]||3036;
app.listen(port,()=>{
    console.log(`himangshu ${port}`)
})