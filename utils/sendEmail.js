require("dotenv").config();
const sgMail = require('@sendgrid/mail');
 
 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 




const sendEmail = (to,from, subject, output) => {
    const msg = {
        to,
        from,
        subject,
        html:output,

    };

    sgMail  .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) =>{
          console.error(error)
          console.log('Response Error:', error.response.data);
        })



}
module.exports = sendEmail;


