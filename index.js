 
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

//  console.log("himangshu")
// function logname(bc){
//   console.log(bc)
// }
// // console.log(process.argv)
// if (process.argv.length<4){
//   process.exit[1];
// }
// logname({
//   name:process.argv[2],
//   state:process.argv[3]
// })


