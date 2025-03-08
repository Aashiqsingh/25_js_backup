function lasvegas(option){
    return option.name + " your tour confirm lasvegas with amount "+ option.amount
    
}
function singapore(option){
    return option.name + " your tour confirm singapore with amount "+ option.amount
}

function goa(option){
    return option.name + " your tour confirm goa with amount "+ option.amount
}

// // cb -- callback 
// function travel(fname,package,cb){
//     var x = cb({
//         name:fname,
//         amount:package
//     })

//     // console.log(x);
//     return x;
    

// }


function travel(fname,package,cb){
    return cb({
        name:fname,
        amount:package
    })

    // console.log(x);
    
    

}

var budget = 3200;
var temp;

if(budget > 3000)
{
    temp = travel("rahul",budget,lasvegas)
}
else if(budget > 2500)
{
    temp = travel("rahul",budget,singapore)
}
else if(budget > 2000)
{
    temp = travel("rahul",budget,goa)
}

console.log(temp);
