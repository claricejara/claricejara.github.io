// projects







// contact form

var submitted=false

function validateName() {
  var name = document.getElementById('name').value;
  
  if(name.length == 0) {
    alert("Please enter your name") ;
    return false;
  }

  if (!name.match(/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name") ;//Validation Message
    return false;
  }
  return true;
}

function validateEmail () {
  var email = document.getElementById('email').value;
  
  if(email.length == 0) {
    alert("Please enter your email") ;//Validation Message
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,5}$/)) {
    alert("Please enter a correct email address") ;//Validation Message
    return false;
  }
  return true;

}

function validateForm() {
  if (!validateName() || !validateEmail()) {
    alert("Form not submitted");//Validation Message
    return false;
  } else {
    alert("Thank you for your message");
    submitted=true;
    return true;
  }
}