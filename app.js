  
  const roles = [
    "Front-end Developer",
    "Computer Engineer",
    "Web Developer",
    "Cybersecurity Enthusiast"
  ];

  let index = 0;
  const changingText = document.getElementById("changing-text");

  function changeRole() {
    changingText.textContent = roles[index];
    index = (index + 1) % roles.length; // loop back to start
  }

  setInterval(changeRole, 2000); // change every 2 seconds

  // mail function
// Initialize EmailJS with your PUBLIC key
(function(){
  emailjs.init("IEryxFIcbZnooPeMT"); // replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.send("service_gnu221n", "template_8pu11be", {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  })
  .then(() => {
    document.getElementById("status-message").innerText = alert("✅ Message sent successfully!");
    this.reset();
  }, (error) => {
    document.getElementById("status-message").innerText = "❌ Failed to send message.";
    console.error("EmailJS Error:", error);
  });
});


