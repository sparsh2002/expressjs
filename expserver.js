const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.send("<h1>Welcome to my Channel</h1>");
    

});

app.get("/about",function(req,res){
    res.send("I am Sparsh Jhariya ")
});

app.get("/contact",function(req,res){
    res.send("mail me at:sparsh3435@gmail.com");
});

app.get("/calculator",function(req,res){
    res.sendFile("C:/Users/DELL/expressjswork/index.html");
});

app.get("/bmi",function(req,res){
    res.sendFile("C:/Users/DELL/expressjswork/bmi.html");
});

app.post("/bmi",function(req,res){
    console.log(req.body);

    let w1=Number(req.body.weight);
    let h1=Number(req.body.height);

    let bmi=w1 / (h1*h1);
    //res.send("Thanku for post The sum of two Numbers:"+sum);

    res.send("The bmi of person is:"+bmi);
});

app.post("/calculator",function(req,res){
    //res.send("Thanku for post");
    console.log(req.body);

    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);

    let sum =n1 + n2;
    //res.send("Thanku for post The sum of two Numbers:"+sum);

    res.send("The sum of two Numbers:"+sum);

});

app.listen(3000,function(req,res){
    console.log("Server is running at port no. 3000")
});