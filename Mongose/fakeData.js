const {faker}=require('@faker-js/faker')
const createdatabase = require('./database/connectdatabase');
const { Employee } = require('./database/employee');
const crypto=require('crypto')
const designations=[
    'Software Engineer',
    'Marketing',
    'sale Lead',

]
const genders=['male','female','other']
async function generatedFakeE(count=500){
    const employees=[];
    for(let i=0;i<count;i++){
        const gender =genders[crypto.randomInt(0,3)];
     const employee={
        name:faker.name.fullName({
            gender:gender
        }),
        gender:gender,
        designation:designations[0,3],
        dateOfBirth:faker.date.between('1990-01-01T00:00:00.000Z', '2004-01-01T00:00:00.000Z'),
        dateOfJoining:faker.date.between('2018-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z'),
        hobbies:['swiming','vollyball'],
        profileImage:faker.internet.avatar(), 
        isMarried: crypto.randomInt(0,1)>0?true:false,
        isVisuallyImpared:crypto.randomInt(0,10)>0?true:false,
        phone:faker.phone.number('+91 ## ## ### ###'),
        email:faker.internet.email(),
        password:faker.internet.password(),
     }  
     employees.push(employee) 
    }
    Employee.insertMany(employees);
}

createdatabase()
.then(()=>generatedFakeE(1))