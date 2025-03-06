function science(fname,per){
    console.log(fname + " your admision confirm in science with per "+per);
    
}

function commerce(fname,per){
    console.log(fname + " your admision confirm in commerce with per "+per);
}

function art(fname,per){
    console.log(fname + " your admision confirm in art with per "+per);
}

var percentage = 41;
var name = "bhuwan";

if(percentage > 90)
{
    science("rahul",percentage)
}
else if(percentage > 70)
{
    commerce(name,percentage)
}
else if(percentage > 50)
{
    art(name,percentage)
}
else{
    console.log("sorry, you are not qualified");
}