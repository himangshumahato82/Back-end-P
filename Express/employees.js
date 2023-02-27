// const { isUtf8 } = require("buffer");
const fs=require(`fs/promises`)
async function getData(){
    const data =await fs.readFile('./employees.json',{
     encoding:'utf-8'
    })
   return JSON.parse(data);
}

async function updateAll(employees){
    const data= JSON.stringify(employees,null,4)
    await fs.writeFile('./employees.json',data,{
        encoding:`utf-8`
    })
}


async function createEmployees(data){

    const employees= await getData()
    let maxId=-1;
    for(const employee of employees){
        if(employee.id>maxId){
            maxId=employee.id
        }
    }
    const newemployee={
        ...data,
        id: maxId+1,
    }
    employees.push(newemployee)
    await updateAll(employees)
    return newemployee
}
async function updateemployeeById(id,data){

    const employees=await getData()
    let index=-1;
    let i=0;
    for(const employee of employees){
        if(employee.id==id){
            index=i;
            break;

        }
        i++;
    }
    if(index ===-1){
     throw new Error('employee does not exist')
    }else{
      let employee= employees[index];

      employee={
        ...employee,
        ...data,
        id: employee.id
      }

      employees[index]=employee;
      await updateAll(employees);
      return employee;
    }
}

async function deleteEmployee(id){

    const employees=await getData()
    let index=-1;
    let i=0;
    for(const employee of employees){
        if(employee.id==id){
            index=i;
            break;

        }
        i++;
    }
    if(index ===-1){
        throw new Error('employee does not exist')
       }else{
        
      const deleteemployee= employees.splice(index,1);
        
         await updateAll(employees);
         return deleteemployee[0];
       }
   }






module.exports ={
    getData,
    createEmployees,
     updateemployeeById,
    deleteEmployee

}