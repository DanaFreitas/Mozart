 const express = require("express");
 const app = express();
 const ejs = require('ejs');
 const port = 3000;
const path = require('path')
 const router = express.Router();
 require('dotenv').config();

 const sgMail = require('@sendgrid/mail') 
 
 sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 
 //port 4000 works ok if chageed. will send emil
 
 const apiKey = process.env.SENDGRID_API_KEY;
 

 app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

 app.get("/", function (req, res) {
  //
  res.render("index")
});


app.use('/', router)
  app.use(express.static(__dirname + '/public')); 
  //app.use(express.static('public'));

  
  app.listen(port,  ()=> 
      console.log(`Server is running on ${port}`)
  );



app.get('/', (req, res) => {
    res.send('Successful response.');
console.log("TELEPORT SUCCESSFUL")
});




//cant have 2 app.listen(port)




const msg = {
  to: 'danarobertfreitas@gmail.com',
  from: 'danarobertfreitas@gmail.com',
  subject: 'test',
  text: 'testing',
  html: '<strong>testing</strong>',
}

sgMail  .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) =>{
          console.error(error)
        })

