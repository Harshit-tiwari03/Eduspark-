const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  let valid = true;

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (message.value.trim().length < 5) {
    document.getElementById("messageError").textContent = "Message too short.";
    valid = false;
  }

  if (!valid) return;

  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push({
    name: name.value,
    email: email.value,
    message: message.value
  });
  localStorage.setItem("submissions", JSON.stringify(submissions));

  document.getElementById("successMsg").textContent = "Message sent successfully!";
  form.reset();
});