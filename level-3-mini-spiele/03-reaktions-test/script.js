// 1. Variablen für Zeiten und DOM-Elemente
let startZeit;
let endZeit;
const box = document.getElementById("box");
const startButton = document.getElementById("startButton");
const ergebnis = document.getElementById("ergebnis");

// 2. Funktion zum Starten des Spiels (mit setTimeout)
startButton.addEventListener("click", function() {
    box.style.backgroundColor = "red";
    box.innerText = "Warten...";
    ergebnis.innerText = "";

    // Zufällige Zeit zwischen 2 und 5 Sekunden
    const verzögerung = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(function() {
        box.style.backgroundColor = "green";
        box.innerText = "JETZT KLICKEN!";
        startZeit = Date.now();
    }, verzögerung);
});

// 3. Funktion für den Klick auf die Box
box.addEventListener("click", function() {
    if (box.style.backgroundColor === "green") {
        endZeit = Date.now();
        const dauer = endZeit - startZeit;
        ergebnis.innerText = "Deine Reaktionszeit: " + dauer + "ms";
        box.style.backgroundColor = "red";
        box.innerText = "Geschafft!";
    } else if (box.style.backgroundColor === "red" && box.innerText === "Warten...") {
        alert("Zu früh geklickt! Warte auf Grün.");
        // Optional: Spiel abbrechen oder Strafe
    }
});
