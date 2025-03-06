// function : code reusblity 
// there are four types of functions
// 1. withou return type without arguments
// 2. without return type with arguments
// 3. with return type without arguments
// 4. with return type with arguments

// function : function 

// withou return type without arguments

function demo()
{
    console.log("demo function called");
    
}

// demo()
// demo()

// without return type with arguments

function add(a,b){
    console.log("addition =",a+b);
    
}

// add(4,5)
// add()

// with return type without arguments

function string(){
    return "with return type without arguments"
}

// var ans = string()
// console.log(ans);

// console.log(string());

// with return type with arguments

function mul(x,y){
    return x*y;
}

var x = mul(2,3)
console.log("Multiply = ",x);

