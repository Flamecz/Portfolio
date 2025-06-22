document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  emailjs.sendForm("service_i78l681", "template_la9o6dg", this)
    .then(() => alert("Message sent!"))
    .catch((error) => alert("Failed to send: " + error));
});