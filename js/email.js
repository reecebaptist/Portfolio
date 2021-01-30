function sendEmail() { 
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('name').value;

    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "portfolioofreece@gmail.com", 
      Password: "sadlimes257", 
      To: 'reece.baptist@gmail.com,portfolioofreece@gmail.com', 
      From: email, 
      Subject: subject, 
      Body: message+"\n-"+name, 
    }) 
      .then(function (message) { 
        document.getElementById('success').style.display = "block";
      }); 
}