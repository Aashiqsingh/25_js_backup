const lasvegas = (option)=>{
    return option.name + " your tour confirm lasvegas with package " + option.package
    
}

const singapore = (option)=>{
    return option.name + " your tour confirm singapore with package " + option.package
}

const goa = (option)=>{
    return option.name + " your tour confirm goa with package " + option.package
}


var budget = 2600;
var fname = "rahul";
var ans;

if(budget > 3500)
{
    ans = lasvegas({
        name:"hari",
        package:budget
    })
}
else if(budget > 2500)
{
    ans = singapore({name:fname,package:budget})
}
else if(budget > 1500)
{
    ans = goa({name:fname,package:budget})
}
else{
    console.log("Insufficient budget for any tour");
}
console.log(ans);
