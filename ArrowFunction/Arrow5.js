const pdfHandler = (option)=>{
    return option.fname + " Handle with pdf handler.."
}
const wordHandler = (option)=>{
    return option.fname + " Handle with word handler.."
}

const jpgHandler = (option) => {
    return option.fname + " Handle with jpg handler.."
}

var fileName = "abc.pdf";
var temp;

if(fileName.endsWith(".pdf"))
{
    temp = pdfHandler(
        {
            fname: fileName,
            size:"1000kb"
        }
    )

    
}
else if(fileName.endsWith(".word")){
    temp = wordHandler({fname: fileName,size:"1000kb"})
}
else if(fileName.endsWith(".jpg")){
    temp = jpgHandler({fname:fileName,size:"1000kb"})
}

console.log(temp);
