# Musterlösungen (Nur für Mentoren!)

Hier findest du Beispiel-Code für die Aufgaben. Bitte zeige diese Lösungen dem Praktikanten **nicht** direkt, sondern nutze sie, um ihm Hinweise zu geben.

## Level 1: Konsole

### 2. Taschenrechner
```javascript
let zahl1 = Number(prompt("Erste Zahl?"));
let zahl2 = Number(prompt("Zweite Zahl?"));
let ergebnis = zahl1 + zahl2;
console.log("Das Ergebnis ist: " + ergebnis);
```

### 3. Türsteher
```javascript
let alter = Number(prompt("Wie alt bist du?"));
if (alter >= 18) {
    console.log("Willkommen im Club!");
} else {
    console.log("Leider zu jung.");
}
```

---

## Level 2: Interaktion

### 1. Klick-Zähler
```javascript
let zaehler = 0;
let btn = document.getElementById("zaehlButton");
let anzeige = document.getElementById("anzeige");

btn.addEventListener("click", function() {
    zaehler = zaehler + 1;
    anzeige.innerText = zaehler;
});
```

---

## Level 3: Spiele

### 1. Zahlen raten (Logik-Kern)
```javascript
let geheimzahl = Math.floor(Math.random() * 100) + 1;
let versuche = 0;

document.getElementById("rateButton").addEventListener("click", function() {
    let tipp = Number(document.getElementById("rateFeld").value);
    versuche++;
    document.getElementById("versucheAnzeige").innerText = versuche;

    let feedback = document.getElementById("feedback");
    if (tipp === geheimzahl) {
        feedback.innerText = "Gewonnen! Die Zahl war " + geheimzahl;
    } else if (tipp < geheimzahl) {
        feedback.innerText = "Zu niedrig!";
    } else {
        feedback.innerText = "Zu hoch!";
    }
});
```

### 2. Schere, Stein, Papier (Logik-Kern)
```javascript
function holeComputerWahl() {
    let r = Math.floor(Math.random() * 3); // 0, 1 oder 2
    if (r === 0) return "Stein";
    if (r === 1) return "Schere";
    return "Papier";
}

function spiele(spielerWahl) {
    let computerWahl = holeComputerWahl();
    // ... Vergleichs-Logik mit if/else
}
```

### 3. Reaktions-Tester (Logik-Kern)
```javascript
let startZeit;
let box = document.getElementById("box");

document.getElementById("startButton").addEventListener("click", function() {
    box.style.backgroundColor = "red";
    box.innerText = "Warten...";
    let verzögerung = Math.random() * 3000 + 2000; // 2-5 Sek

    setTimeout(function() {
        box.style.backgroundColor = "green";
        box.innerText = "JETZT KLICKEN!";
        startZeit = Date.now();
    }, verzögerung);
});

box.addEventListener("click", function() {
    if (box.style.backgroundColor === "green") {
        let dauer = Date.now() - startZeit;
        document.getElementById("ergebnis").innerText = "Deine Zeit: " + dauer + "ms";
        box.style.backgroundColor = "red";
    }
});
```
