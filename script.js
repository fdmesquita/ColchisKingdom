const message =
  "Thank you for submitting your message. The royal family will respond shortly.";
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
