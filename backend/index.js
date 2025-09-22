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

// //To read a file using Async
// fs.readFile("index2.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// //To append something in a file using Async
// fs.appendFile("index2.txt","hellooooo",function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File appended")
//     }
// })

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









// let http = require('http');

// let server = http.createServer(function(req,res){
//     res.end("hello from server")
// })

// server.listen(3000, function(){
//     console.log("Server is running on port 3000")
// })





// let express = require('express');
// let fs = require('fs');

// let app = express();

// // Home route
// app.get('/', (req, res) => {
//     res.send("Hello from server");
// });

// // Create a file
// app.get("/create", (req, res) => {
//     fs.writeFileSync("index.txt", "Happy Birthday Aanya");
//     res.send("File created");
// });

// // Read file content
// app.get("/read", (req, res) => {
//     if (fs.existsSync("index.txt")) {
//         let text = fs.readFileSync("index.txt");
//         res.send(text.toString());
//     } else {
//         res.send("File does not exist");
//     }
// });

// // Append text to file
// app.get("/append", (req, res) => {
//     if (fs.existsSync("index.txt")) {
//         fs.appendFileSync("index.txt", "\nHave a wonderful day!");
//         res.send("Text appended");
//     } else {
//         res.send("File does not exist to append");
//     }
// });

// // Delete file
// app.get("/delete", (req, res) => {
//     if (fs.existsSync("index.txt")) {
//         fs.unlinkSync("index.txt");
//         res.send("File deleted");
//     } else {
//         res.send("File does not exist to delete");
//     }
// });

// // Start the server
// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });



// let express = require('express')
// let app = express();
// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// })



// let express=  require("express")
//       let app=    express()
//       app.use(express.json())
//       let fs=    require("fs")
//       let arr=[1,2,3,4,5,6,5,4,34,3,11,3,4,55,56]

//       app.get("/:data",(req,res)=>{
//         let {data}=req.params
//           let val=  arr.filter((a)=>{
//             return data==a

//            })

//         console.log(val);
//         res.send(val)
  
//       //  /
//       })
              
      // app.get('/',(req,res)=>{
      //   res.send("hello")

      // })
      // http://localhost:4000/search?name=anu&&lastname=jain
      // app.get("/search",(req,res)=>{
      //   let data=   req.query
      //   console.log(data);
        
      //  let {a}=   req.params
      //  console.log(a);
      //   let val=   arr.filter((data)=>{
      //       return data==a

      //     })
      //     res.send(val)
       
     //    npx nodemon start

    //  let {ani}=    req.params
    //     res.send(ani)
        // console.log(req);
        // res.send(req)
        // req.send("heee")
      // })
    //   app.get("/cat",(req,res)=>{
    //     res.send("cat")
    //     // console.log(req);
    //     // res.send(req)
    //     // req.send("heee")

    //   })
//  srverrrrrrr    
// app.get("/",()=>{
//   res
// })
//     app.get("/read",(req,res)=>{
//          let data=  fs.readFileSync('index.txt')
//       res.send(data.toString())
//     })

//     app.post("/creat",(req,res)=>{
//          let data=    req.body
//         //  console.log(data);
//         fs.writeFileSync("index.txt",JSON.stringify(data))
//       res.send("hello mai post req hu ")
//     })

//     app.delete("/remove",(req,res)=>{
//       fs.unlinkSync("index.txt")
//       res.send("data delet ho chuka haiii")

//     })
    // app.post ,app.patch app.delete

    // https://www.flipkart.com/
      // app.listen(4000,()=>{
      //   console.log("server running  on 4000");

      // })





// let data={
//     ani:"cat"
// }
// let {ani}=data

// console.log();

         



// //new class 

// let express = require("express");
// let app = express();
// let fs = require("fs");

// // Middleware to parse JSON body
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.post("/create", (req, res) => {
//     let data = req.body;
//     fs.writeFileSync("index.txt", data.msg);
//     res.send("File created");
// });

// app.patch("/edit", (req, res) => {
//     let dataForEdit = req.body;
//     fs.appendFileSync("index.txt", dataForEdit.msg);
//     res.send("File updated");
// });

// app.delete("/", (req, res) => {
//     fs.unlinkSync("index.txt");
//     res.send("File deleted");
// });

// app.listen(4000, () => {
//     console.log('Example app listening on port 4000!');
// });





// // new class 

// let express= require("express")
//  let app=    express()
//  let fs=   require('fs')
//  let cors=  require('cors')
//  app.use(express.json())
//  app.use(express.urlencoded({extended:true}))
//  app.use(cors())


//  app.get('/',(req,res)=>{
//   // res.send("hello")
//   //  let data=   fs.readFileSync("index.html")
//    res.send(data.toString())

//  })
//  app.post("/create",(req,res)=>{

//      console.log(req.body);
    
//   // fs.writeFileSyn =c("index.html",data.msg)
//   res.send(req.body)

//  })
//  app.post("/login",(req,res)=>{

//     let loginInfo=   req.body
//   res.send(loginInfo)


//  })

//  app.listen(4000,()=>{
//   console.log("server running on port no 4000");
  
//  })



let express = require("express")
let app = express()
app.use(express.json())
const bcrypt = require('bcryptjs');


const User= require('./user')
   let mongoose=    require("mongoose")
   mongoose.connect("mongodb://127.0.0.1:27017/onLineClass")
  .then(() => console.log("db connected..."))
  .catch(err => console.log(err));

    

app.get('/', (req, res) => {
  res.send("hello")
})
  
app.post('/user', async(req,res)=>{
    
  let {name,email,passWord}= req.body 
  let userData=    new User({
    name,
    email,
    passWord
  })
  await  userData.save()
  res.send({msg:"user saved  succuessfulyyy"})
})
app.listen(4000, () => {
  console.log("server running on port no 4000");

})

app.post("/signUp",  async(req,res)=>{

  let {name,email,passWord}=req.body
        
  const existingUser=await  User.findOne({email})
  if(existingUser){
    return res.send({msg:"User already exists"})
  }
  else{
    let hashedP=await bcrypt.hash(passWord,10)
    console.log(hashedP);
    let newUser=     new User({
      name:name,
      email:email,
      passWord:hashedP
    })
    await   newUser.save()
    res.send({msg:"user registered"} )
  }
})

app.post("/login", async (req, res) => {
  try {
    let { email, passWord } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found!!!" });
    }

    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({ msg: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
