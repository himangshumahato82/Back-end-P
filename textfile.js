 const fs=require('fs')

 function count(file){
    const data =fs.readFileSync(file)

    return data.length;
 }
 let filename =process.argv[2];
 console.log('NOC',filename, 'are ' , count(filename))
