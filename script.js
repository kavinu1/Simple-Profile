const ageInput = document.getElementById("age");
const feedback = document.getElementById("age-feedback");
const fieldset = document.getElementById("user-details");

function ageValidation() {
  if (parseInt(ageInput.value) >= 18) {
    feedback.innerHTML = "&check; You are eligible for discount";
    feedback.className = "eligible";
  } else {
    feedback.innerHTML = "&cross; You are not eligible for discount";
    feedback.className = "not-eligible";
  }
}

ageInput.addEventListener("input", ageValidation);

function submitProfile() {
  document.getElementById("profile-name").textContent =
    document.getElementById("user-name").value;

  document.getElementById("profile-study").textContent =
    document.getElementById("status").value;

  const subFinal = document.getElementById("profile-sub");
  const subDis = document.querySelector('input[name="discount"]:checked').value;
  const subText = document.getElementById("subscription").value;
  let subValue = 0;

  if (subDis === "yes") {
    if (subText === "Free/Basic £0") {
      subFinal.textContent = subText;
    } else if (subText === "Standard £9.99 per/month") {
      subValue = parseFloat(9.99 * 0.8).toFixed(2);
      subFinal.textContent = `Standard £${subValue} per/month (20% discount)`;
    } else {
      subValue = parseFloat(19.99 * 0.8).toFixed(2);
      subFinal.textContent = `Premium £${subValue} per/month (20% discount)`;
    }
  } else {
    subFinal.textContent = subText;
  }
}

const subscriptionSelect = document.getElementById("subscription");

subscriptionSelect.addEventListener("change", function () {
  alert(
    "You subscription choice changed. Press submit profile to re-calculate your discount."
  );
});

function changeBackgroundColor(color) {
  fieldset.style.backgroundColor = color;
}
