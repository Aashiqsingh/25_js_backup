const pdfHandler = (option)=>{
    return option.fname + " file handle with pdf handler.."
}

const wordHandler = (option)=>{
    return option.fname + " file handle with word handler.."
}

const excelHandler = (option)=>{
    return option.fname + " file handle with excel handler.."
}

const Handler = (file,cb)=>{
    return cb({
        fname:file.name,
        size:file.size
    })
}

var fileName = "abc.word";
var temp;

if(fileName.endsWith(".pdf")){
    temp = Handler({name:fileName,size:"1000kb"},pdfHandler)
}
else if(fileName.endsWith(".word")){
    temp = Handler({name:fileName,size:"2000kb"},wordHandler)
}
else if(fileName.endsWith(".excel")){
    temp = Handler({name:fileName,size:"3000kb"},excelHandler)
}

console.log(temp);
