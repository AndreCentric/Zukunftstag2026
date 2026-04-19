// 1. Geheimzahl generieren
let geheimzahl = Math.floor(Math.random() * 100) + 1;

// 2. Variablen für Versuche und Elemente holen
let versuche = 0;
let rateFeld = document.getElementById("rateFeld");
let rateButton = document.getElementById("rateButton");
let feedback = document.getElementById("feedback");
let versucheAnzeige = document.getElementById("versucheAnzeige");

// 3. Funktion für den Klick auf den Button
rateButton.addEventListener("click", function() {
    let tipp = Number(rateFeld.value);
    versuche++;
    versucheAnzeige.innerText = versuche;

    if (tipp === geheimzahl) {
        feedback.innerText = "Gewonnen! Die Zahl war " + geheimzahl;
        feedback.style.color = "green";
    } else if (tipp < geheimzahl) {
        feedback.innerText = "Zu niedrig!";
        feedback.style.color = "red";
    } else {
        feedback.innerText = "Zu hoch!";
        feedback.style.color = "red";
    }

    rateFeld.value = ""; // Feld leeren für den nächsten Tipp
    rateFeld.focus();    // Fokus zurück ins Feld setzen
});
