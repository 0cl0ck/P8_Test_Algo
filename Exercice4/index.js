document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const messageContainer = document.createElement("p");
  document.body.appendChild(messageContainer);

  button.addEventListener("click", function () {
    messageContainer.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  });
});
