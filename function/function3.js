function science(fname,per){
    return fname + " your admision confirm in science with per "+per
    
}

function commerce(fname,per){
    return fname + " your admision confirm in commerce with per "+per
}

function art(fname,per){
    return fname + " your admision confirm in art with per "+per
}

var percentage = 61;
var name = "bhuwan";
var temp;

if(percentage > 90)
{
    temp = science("rahul",percentage)
}
else if(percentage > 70)
{
    temp = commerce(name,percentage)
}
else if(percentage > 50)
{
    temp = art(name,percentage)
}
else{
    console.log("sorry, you are not qualified");
}

console.log(temp);
