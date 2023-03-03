const fs=require('fs/promises')

async function getdata(){
    const data=await fs.readFile('./employees.json',{
        encoding:'utf-8'
    })
    return JSON.parse(data);
}

async function updateAll(employees){
const data=JSON.stringify(employees,null,4)
await fs.writeFile('./employees.json',data,{
    encoding:'utf-8'
})
}


async function createnewData(data){
    const employees= await getdata()
    let maxId=-1;
    for( const employee of employees ){
        if(employee.id>maxId){
            maxId=employee.id
        }
    }
   const newEmployee={
    ...data,
    id:maxId+1
   }
   employees.push(newEmployee)
   await updateAll(employees)
   return newEmployee

}
async function updateById(id,data){
 const employees= await getdata()
 let index=-1;
 let i=0;
 for(const employee of employees){
 if(employee.id==id){
  index=i;
  break;
}
i++;
}
 if(index===-1){
   throw new Error('Galat hhh') 
 }else{
   let employee=employees[index];

   employee={
    ...employee,
    ...data,
    id:employee.id
   }
   employees[index]=employee;
   await updateAll(employees)
   return employee;
 }
 
}



module.exports={
    getdata,
    createnewData,
    updateById
}