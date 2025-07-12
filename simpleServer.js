const express = require('express');
const {adminAuth, userAuth} = require('./midlleware/util.js');

const app = express();

const PORT  = 3000;



app.get('/hello', adminAuth,
//  res.send("Hello from the /hello route!");
(req,res,prev) => {
    throw new Error("sadfasf");
    prev();
})

// Error handling middleware

app.use("/hello",(err,req,res,next) => {
    if(err){
        console.error("An error occurred:", err);
        res.status(500).send("Something went wrong!");
    }
})



app.use("/user", userAuth, (req,res) => {
    console.log('User middleware is executed');
    // you can add more logic here if needed
    // For example, you can send a response or call next()
    // but in this case, we will just send a response
    console.log("User route accessed");
    res.send("Hello world use");
})

app.get('/',(req,res) =>{
    res.send('Hello World!');
});

app.get('/abot',(req,res) =>{
    res.send('Hello Worldddddddddddd');
});

app.post('/userCreate',(req,res) =>{
    res.send('User has been created successfully!');
});



app.listen(PORT, () => {
    console.log("server is running on port 30000");
});