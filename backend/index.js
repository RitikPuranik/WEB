// let fs=require("fs")

// //To create a file
// fs.writeFileSync("index.txt","hellooo ")

// //To read a file
// let text=fs.readFileSync("index.txt")
// console.log(text.toString())

// //to append something in a file
// fs.appendFileSync("index.txt","hellooooo")
// text=fs.readFileSync("index.txt")
// console.log(text.toString())             //used.toString()becasue the answer gives in buffer

// //To rename a file
// fs.renameSync("index.txt","index1.txt")
// text=fs.readFileSync("index1.txt")
// console.log(text.toString())

// //To delete a file
// fs.unlinkSync("index1.txt")

// //To check whether the file exist or not
// let res=fs.existsSync("index1.txt")
// console.log(res)




// //Creating file using Async
// fs.writeFile("index2.txt","hellooo",function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File created")
//     }
// })

//To read a file using Async
fs.readFile("index2.txt","utf-8",function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

//To append something in a file using Async
fs.appendFile("index2.txt","hellooooo",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("File appended")
    }
})

// //To rename a file using Async
// fs.rename("index2.txt","index3.txt",function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File renamed")
//     }
// })

// //To delete a file using Async
// fs.unlink("index3.txt",function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File deleted")
//     }
// })









let http = require('http');

let server = http.createServer(function(req,res){
    res.end("hello from server")
})

server.listen(3000, function(){
    console.log("Server is running on port 3000")
})