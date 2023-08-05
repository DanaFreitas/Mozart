 const express = require("express");
 const app = express();
 const bodyParser = require('body-parser')
 //swnd to req body
 app.use(express.json())

 const sendEmail = require('./utils/sendemail')
 const ejs = require('ejs');
 const port = 3000;
const path = require('path')
//can make pathing
 const router = express.Router(); 
 require('dotenv').config();
 //allow dotenv
 express.urlencoded({ extended: false }) //will alow destructuring for post 
 app.set('views', path.join(__dirname, 'views'))
 //put in views
app.set('view engine', 'ejs');
//put in ejs
 app.get("/", function (req, res) {
  // make index
  res.render("index")
});


app.get("/sent", (req, res) => {
  res.render("sent");
});

//makes the sent page



app.use('/', router)
  app.use(express.static(__dirname + '/public')); 

//allow public

  app.use(bodyParser.json());
  

  app.listen(port,  ()=> 
      console.log(`Server is running on ${port}`)
  );

//declares running


app.post("/sendthemail", (req,res) => {

  const {name,email,about,text} = req.body;





  //get data from client
  //const from = email;
  const from = "danarobertfreitas@gmail.com"; 
  const to = "danarobertfreitas@gmail.com";


const subject = "test";

//protect the sender
  const output = `
    <p>You have a new message from a Mozart fan.</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Subject: ${about}</li>
      <li>Text: ${text}</li>

    </ul>
  `
  sendEmail(to,from ,subject, output)
  //res.redirect("/sent");
})
     


