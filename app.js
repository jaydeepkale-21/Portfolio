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

