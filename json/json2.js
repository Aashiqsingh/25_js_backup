var employee = {
    empId:101,
    name:"samir",
    age:30,
    salary:89333,
    email:"samir@gmail.com",
    mobile:[8975394543, 7847940293, 78323899982],
    gender:"male",
    address:{
        shopNo:102,
        street:"c.g road",
        city:"Ahemadabad",
        state:"Gujarat",
        country:"India",
        pincode:380015
    }
}

console.log(employee);

console.log(employee.name);
console.log(employee.email);
console.log(employee.salary);
console.log(employee.age);
console.log(employee.gender);
console.log(employee.mobile);
// console.log(employee.mobile[0]);
// console.log(employee.mobile[1]);

for(let i=0;i<employee.mobile.length;i++)
{
    console.log(employee.mobile[i]);
    
}

console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.state);
console.log(employee.address.city);










