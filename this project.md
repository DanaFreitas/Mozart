# this project

I neeed to figure out the purpose of the email sending. all this time, I didnt put enough thought into who the notes were being sent to. 

I have one or two targets. Maybe the user, but definitely the reciever. The use might get a not saying that the email as sent. The reciever DEFINITELY should, saying all of the parts of the email. The issue with a tutorial I have been listening to https://www.youtube.com/watch?v=G7iLLFKZVWA&t=8s, is they are sending everything to the user, when I should be getting it. This will help in terms of modifying it so I better learn something. 


dont declare the port multiple times



^RError: Provide at least one of to, cc or bcc
    at Mail.addTo (C:\xampp\htdocs\Mozart\node_modules\@sendgrid\helpers\classes\mail.js:254:13)
    at Mail.fromData (C:\xampp\htdocs\Mozart\node_modules\@sendgrid\helpers\classes\mail.js:114:12)
    at new Mail (C:\xampp\htdocs\Mozart\node_modules\@sendgrid\helpers\classes\mail.js:46:12)
    at Mail.create (C:\xampp\htdocs\Mozart\node_modules\@sendgrid\helpers\classes\mail.js:594:12)
    at MailService.send (C:\xampp\htdocs\Mozart\node_modules\@sendgrid\mail\src\classes\mail-service.js:194:25)
    at sendEmail (C:\xampp\htdocs\Mozart\utils\sendEmail.js:20:14)
    at C:\xampp\htdocs\Mozart\mozart.js:61:3
    at Layer.handle [as handle_request] (C:\xampp\htdocs\Mozart\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\xampp\htdocs\Mozart\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (C:\xampp\htdocs\Mozart\node_modules\express\lib\router\route.js:114:3)

ResponseError: Bad Request
    at C:\xampp\htdocs\Mozart\node_modules\@sendgrid\client\src\classes\client.js:146:29
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 400,
  response: {
    headers: {
      server: 'nginx',
      date: 'Mon, 24 Jul 2023 18:32:20 GMT',
      'content-type': 'application/json',
      'content-length': '947',
      connection: 'close',
      'access-control-allow-origin': 'https://sendgrid.api-docs.io',
      'access-control-allow-methods': 'POST',
      'access-control-allow-headers': 'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
      'access-control-max-age': '600',
      'x-no-cors-reason': 'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
      'strict-transport-security': 'max-age=600; includeSubDomains'
    },
    body: { errors: [Array] }
  }


  ResponseError: Bad Request
    at C:\xampp\htdocs\Mozart\node_modules\@sendgrid\client\src\classes\client.js:146:29
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 400,
  response: {
    headers: {
      server: 'nginx',
      date: 'Mon, 24 Jul 2023 18:40:57 GMT',
      'content-type': 'application/json',
      'content-length': '875',
      connection: 'close',
      'access-control-allow-origin': 'https://sendgrid.api-docs.io',
      'access-control-allow-methods': 'POST',
      'access-control-allow-headers': 'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
      'access-control-max-age': '600',
      'x-no-cors-reason': 'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
      'strict-transport-security': 'max-age=600; includeSubDomains'
    },
    body: { errors: [Array] }
  }
}


The error message you provided indicates that there was a "Bad Request" made to the SendGrid API. The error code is 400, which typically means that the request sent to the server was malformed or invalid in some way.

Here are some possible reasons for this error:

    Invalid Request Parameters: The request sent to the API might be missing required parameters or may have parameters with incorrect values.

    Authorization Issues: The API might require authentication, and the provided credentials (Authorization header) might be incorrect or missing.

    Content-Type Header: The 'Content-Type' header might be missing or set to an unsupported value. It should be set to 'application/json' when sending JSON data.

    CORS (Cross-Origin Resource Sharing) Issue: The error message mentions 'access-control-allow-origin' and 'x-no-cors-reason', indicating that there might be a CORS-related problem. Make sure the API endpoint allows requests from the domain your application is hosted on.

    Request Rate Limiting: The error could be due to exceeding rate limits for the API. Check the API documentation for rate limits and adjust your requests accordingly.

To troubleshoot the issue, you can:

    Double-check the request parameters and ensure they are correctly formed.
    Verify that the 'Authorization' header is properly set with the required credentials.
    Set the 'Content-Type' header to 'application/json' if you are sending JSON data.
    Review the CORS settings and ensure they are correctly configured to allow your domain.
    Check if you are exceeding any rate limits for the API.

If you need more specific help, consider providing additional information about the code that triggered this error, such as the relevant code snippet where the request is being made to the SendGrid API.


the request isnt reaching the body. try purging some middleware. shouldnt be json or xml or string? check api\



nodemon mozart.js watch sass. turn on xampp. localhost:3000