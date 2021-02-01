function sendEmail() { 
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;

    Email.send({ 
      SecureToken : "69901d68-53c7-4c77-aca9-09076a5963c8",
      To : 'portfolioofreece@gmail.com,reece.baptist@gmail.com',
      From : email,
      Subject : "[PORTFOLIO CONTACT BY: "+name+"] "+subject,
      Body : message
    }) 
      .then(function (message) { 
        document.getElementById('success').style.display = "block";
      }); 
}