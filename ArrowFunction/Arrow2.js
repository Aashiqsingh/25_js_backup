const lasvegas = (option)=>{
    console.log(option.name + " your tour confirm lasvegas with package " + option.package);
    
}

const singapore = (option)=>{
    console.log(option.name + " your tour confirm singapore with package " + option.package);
}

const goa = (option)=>{
    console.log(option.name + " your tour confirm goa with package " + option.package);
}


var budget = 2600;
var fname = "rahul";

if(budget > 3500)
{
    lasvegas({
        name:"hari",
        package:budget
    })
}
else if(budget > 2500)
{
    singapore({name:fname,package:budget})
}
else if(budget > 1500)
{
    goa({name:fname,package:budget})
}
else{
    console.log("Insufficient budget for any tour");
}