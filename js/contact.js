const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm() {
  event.preventDefault();

  if (findLength(name.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (findLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (findLength(address.value, 24)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("yo");
}

form.addEventListener("submit", validateForm);

function findLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  const patternMatches = regex.test(email);
  return patternMatches;
}
