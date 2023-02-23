const http=require('http')
const {fibonacci}=require('../math')
const fs=require('fs')

const server=http.createServer((req, res)=>{
console.log("himangshu")

 const path =req.url;
 const metho= req.method;

console.log(new Date(), metho,path)
if(path.includes('fibonacci')&& metho ==='GET' ){
    const n=parseInt(path.split('/').pop());

    return res.end(JSON.stringify({
        data:fibonacci(n)
    }))
} else if(path.includes('chancked') && metho==='GET'){

    res.write('1st')
    res.write('2nd')
    
    return res.end()

} else if(path.includes('file')&& metho==='GET'){


    const filename=path.split('/').pop();

    const data=fs.readFileSync('./' + filename)

    return res.end(data)

}

res.writeHead(201,{'content-type':'application/json'})
res.end(JSON.stringify({
    data:'Hello World'
}))
})

server.listen(3035)

console.log("Himu")