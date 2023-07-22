 const express = require("express");
 const app = express();
 const sendEmail = require('./utils/sendEmail.js')
 const ejs = require('ejs');
 const port = 3000;
const path = require('path')
 const router = express.Router();
 require('dotenv').config();
 express.urlencoded({ extended: false }) //will alow destructuring for post 

 //const sgMail = require('@sendgrid/mail') 
 
 //sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
 //const apiKey = process.env.SENDGRID_API_KEY;
 

 app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

 app.get("/", function (req, res) {
  //
  res.render("index")
});


app.get("/sent", (req, res) => {
  res.render("sent");
});


app.use('/', router)
  app.use(express.static(__dirname + '/public')); 
  //app.use(express.static('public'));

  
  app.listen(port,  ()=> 
      console.log(`Server is running on ${port}`)
  );


//})



//cant have 2 app.listen(port)

//{

// const formsubmit = document.getElementById("submit")
// const formrecipient = document.getElementById("email")
// const formsubject = document.getElementById("subject")
// const formtext = document.getElementById("text")



//for some reason, it has to come from me

app.post("/sendemail", (req,res) => {


  const {name,email,subject,text} = req.body;
  const from = "process.env.FROM_EMAIL";

  const output = 'testing!!!'

  sendEmail(output)
  res.redirect("/sent");
  // const msg = {
  //   to: formrecipient,
  //   from: 'danarobertfreitas@gmail.com',
  //   subject: formsubject,
  //   text: formtext,
  //   html: 'testing',
  // }


// sgMail  .send(msg)
//         .then(() => {
//           console.log('Email sent')
//         })
//         .catch((error) =>{
//           console.error(error)
//         })

//       })

})
     





      // // formsubmit.addEventListener("click", (event) => {
      // //   console.log("Log!")
      // //  window.location.href = "localhost:3000/"
      // // })