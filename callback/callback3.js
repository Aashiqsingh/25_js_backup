function lasvegas(option){
    return option.name + " your tour confirm lasvegas with amount "+ option.amount
    
}
function singapore(option){
    return option.name + " your tour confirm singapore with amount "+ option.amount
}

function goa(option){
    return option.name + " your tour confirm goa with amount "+ option.amount
}

// cb -- callback 
function travel(fname,package,cb){
    var x = cb({
        name:fname,
        amount:package
    })

    console.log(x);
    

}

var budget = 3200;

if(budget > 3000)
{
    travel("rahul",budget,lasvegas)
}
else if(budget > 2500)
{
    travel("rahul",budget,singapore)
}
else if(budget > 2000)
{
    travel("rahul",budget,goa)
}