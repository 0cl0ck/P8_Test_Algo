let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    // Utilisation de eval() pour calculer le résultat
    // Note : eval() peut être dangereux dans certains contextes,
    // mais pour une calculatrice simple, c'est acceptable
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erreur";
  }
}
