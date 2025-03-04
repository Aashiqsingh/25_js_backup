var a = parseInt(prompt("Enter first number :-"))
var b = parseInt(prompt("Enter second number :-"))

var choice = parseInt(prompt("1 for add \n2 for sub \n3 for mul \n4 for div \n\n Enter your choice :"))

switch(choice)
{
    case 1:
        console.log("addition = ",a+b);
        break;

    case 2:
        console.log("subtraction = ",a-b);
        break;
        
    case 3:
        console.log("multiplication = ",a*b);
        break;
        
    case 4:
        console.log("Divide = ",a/b);
        
        
    default:
        console.log("Invalid choice!");
        
}