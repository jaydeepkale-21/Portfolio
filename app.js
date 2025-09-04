  
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
(function () {
  emailjs.init("IEryxFIcbZnooPeMT"); // <-- replace with your public key from EmailJS
})();

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("status");
const sendBtn = document.getElementById("sendBtn");

function setStatus(text, ok) {
  statusEl.textContent = text || "";
  statusEl.className = "msg " + (ok ? "ok" : "err");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setStatus("", true);

  // Honeypot check
  if (document.getElementById("company").value) {
    setStatus("Blocked suspicious submission.", false);
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    setStatus("Please fill all fields.", false);
    return;
  }

  // Disable button while sending
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  try {
    await emailjs.send(
      "service_gnu221n",       // <-- replace with your Service ID
      "template_8pu11be",      // <-- replace with your Template ID
      { name, email, message } // must match EmailJS template variables
    );

    setStatus("✅ Message sent successfully!", true);
    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    const msg = (error && error.text) ? error.text : "Something went wrong.";
    setStatus("❌ Failed to send: " + msg, false);
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = "Send Message";
  }
});


