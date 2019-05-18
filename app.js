const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const users = [];

app.get("/", function(request, response){
  response.sendFile(__dirname + "/signup.html");
});

app.get("/signup", function(request, response){
  response.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function(request, response){
  const details =[
        request.body.firstname,
        request.body.lastname,
        request.body.age,
        request.body.email,
        request.body.password,
        request.body.confirmPassword
      ];
  users.push(details);

  response.send("Success: " + users);
});

app.listen(3000, function(){
  console.log("Server Started");
});
