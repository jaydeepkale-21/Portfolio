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
function SentMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_gnu221n", "template_8pu11be", parms)
    .then(function(response) {
      alert("✅ Email sent successfully!");
      console.log("SUCCESS", response);
    }, function(error) {
      alert("❌ Failed to send email. Please try again.");
      console.error("FAILED", error);
    });
}
emailjs.init("IEryxFIcbZnooPeMT"); 
