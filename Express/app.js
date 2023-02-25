const express=require('express')
const fs=require('fs')

async function getEmployees(){

    const data =await fs.readFile('./employees.json' , {
        encoding:'utf-8'
    })
    return JSON.parse(data);
}

const app=express();

app.get('./employees',async(req,res)=>{
    const employees=await getEmployees()

    return res.send({
        data:employees
    })
})

const port=process.argv[2]||3036;
app.listen(port,()=>{
    console.log(`himu:${port}`)
})