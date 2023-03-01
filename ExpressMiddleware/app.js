const express=require(`express`)
const router=require('./Router/employee')

const app=express();

app.use(express.json());

async function logRequest(req,res,next){
    console.log(new Date(),req.method,req.url)
    next();
}
app.use(logRequest);
app.use('/',router);



const port=process.argv[2]||3036;
app.listen(port,()=>{
    console.log(`himangshu ${port}`)
})