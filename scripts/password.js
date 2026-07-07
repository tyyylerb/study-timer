const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const hiddenDiv = document.getElementById("hidden");

function toggleSecretMessage() {
  hiddenDiv.style.display = passwordInput.value === "6411" ? "block" : "none";
}

submitBtn.addEventListener("click", toggleSecretMessage);

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    toggleSecretMessage();
  }
});

hiddenDiv.style.display = "none";