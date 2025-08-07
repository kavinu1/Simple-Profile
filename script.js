const ageInput = document.getElementById("age");
const feedback = document.getElementById("age-feedback");
const fieldset = document.getElementById("user-details");
const patterns = document.querySelectorAll(".pattern");

ageInput.addEventListener("input", () => {
  if (parseInt(ageInput.value) >= 18) {
    feedback.textContent = "You are eligible for discount";
    feedback.className = "feedback eligible";
  } else {
    feedback.textContent = "You are not eligible for discount";
    feedback.className = "feedback not-eligible";
  }
});

function submitProfile() {
  const name = document.getElementById("username").value;
  const study = document.getElementById("study-status").value;
  const subscription = document.getElementById("subscription").value;
  const discount = document.querySelector(
    'input[name="discount"]:checked'
  ).value;

  let finalSub = subscription;
  if (discount === "yes" && parseInt(ageInput.value) >= 18) {
    finalSub += " (after 20% discount)";
  }

  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-study").textContent = study;
  document.getElementById("profile-sub").textContent = finalSub;
}

function selectPattern(elem, pattern) {
  patterns.forEach((p) => p.classList.remove("selected"));
  elem.classList.add("selected");
  fieldset.style.setProperty("--pattern", pattern);
}
