const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const hiddenDiv = document.getElementById("hidden");

submitBtn.addEventListener("click", () => {
  if (passwordInput.value === "6411") {
    hiddenDiv.style.display = "block";
  } else {
    hiddenDiv.style.display = "none";
  }
});