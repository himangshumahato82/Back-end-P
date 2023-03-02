 
 const {fibonacci,rnadom}= require("./math")
//  const crypto =require('crypto')
 const fs=require('fs');
 console.log(fibonacci(6))
 console.log(rnadom(10,16))
//  console.log(crypto.randomUUID())
const data =fs.readFileSync('./README.md',{
  encoding: 'utf-8'
});
console.log(data)

 console.log("himangshu")
/

function add(a,b){
 console.log(a+b)
}

add(
 Number(process.argv[2]), Number(process.argv[2])
  
)

