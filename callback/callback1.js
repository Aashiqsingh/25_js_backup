function demo(){
    console.log("demo function called..");
    
}


function test(x){
    // console.log(x);
    x()
    
}


// test(12)
// test("ram")
// test(12.545)
// test(true)


test(demo)