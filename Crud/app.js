    const express=require('express')
const { getdata, createnewData, updateById, DeleteE } = require('./employees')
    
   const app=express()

     app.use(express.json());
   app.get('/employees',async(req,res)=>{
    try{
     const employees=await getdata();
     return res.send({
        data:employees
     })
    }catch(err){
     console.log(err)
     return res.status(500).send({
        messege:"Unexpected Error"
     })
    }
   })


   app.post('/employees', async(req,res)=>{
    try{
        const employee=await createnewData(req.body)
        return res.send({
            data:employee
        })

    }catch(err){
    console.log(err)
    return res.status(500).send({
        messege:"Unexpected Error"
    })
    }
   })


   app.patch('/employee/:id',async(req,res)=>{
      try{
        const employee= await updateById(req.params.id,req.body)
          return res.send({
            data:employee
          })

      }catch(err){
        console.log(err)
        return res.status(500).send({
            messege:"unexpected error"
        })
      }
   })



   app.delete('/employee/:id',async(req,res)=>{
    try{
      const employee=await DeleteE(req.params.id);
      return res.send({
        data:employee
      })
    }catch(err){
      console.log(err)
      return res.status(500).send({
        messege:"Unexpected error"
      })
    }
   })



   const port=process.argv[2]||3037

   app.listen(port,()=>{console.log(`Himangshu Mahato ${port}`)

})
