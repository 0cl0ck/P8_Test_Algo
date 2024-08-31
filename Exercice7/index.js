function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value.trim();
  const binaryResult = document.getElementById("binaryResult");

  // Vérifie si l'entrée contient uniquement des chiffres et ne commence pas par un chiffre suivi de lettres
  if (!/^\d+$/.test(decimalInput)) {
    binaryResult.textContent = ""; // Affiche rien si l'entrée est invalide
    return;
  }

  // Convertit l'entrée en nombre entier
  const decimalNumber = parseInt(decimalInput, 10);

  // Convertit le nombre entier en binaire
  const binaryOutput = decimalNumber.toString(2);

  // Affiche le résultat binaire
  binaryResult.textContent = binaryOutput;
}

// Ajouter un gestionnaire d'événements pour le bouton
document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault(); // Empêcher le rechargement de la page
  convertToBinary();
});

// Ajouter un gestionnaire d'événements pour l'input afin de nettoyer le résultat en cas de saisie invalide
document.getElementById("decimalInput").addEventListener("input", function () {
  const inputValue = this.value.trim();
  if (!/^\d+$/.test(inputValue)) {
    document.getElementById("binaryResult").textContent = "";
  }
});
