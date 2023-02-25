const express=require('express')
const fs=require('fs/promises')
const app =express()
 app.use(express.json())
const port =process.argv[2]||3036;

app.get('/', (req, res ,next )=>{


    return res.send({
        massege:"Hello"
    })
})

app.get('/file/:fileName', async (req,res)=>{
   
    
   
    try {
        const data = await fs.readFile(`./${req.params.fileName}`);

        res.send(data.toString())  
    } 
    catch (error) {
        const data =await fs.readFile(`./404.html`)
        return res.status(404).send(data.toString())
       
       
    }
    
})
app.post('/file/:fileName', async (req,res)=>{

    try {
      const fileName =req.params.fileName;
      const text=req.body.txt;

      console.log(text)
      const file =fs.writeFile(`./${fileName}`,text,{
        encoding:'utf-8'
      })

      return res.send('Done')
        
    } catch (err) {
        
      return res.send('unnnn')  
    }

})


app.listen(port,()=>{
    console.log(`hium ${port}`)
})

