# Musterlösungen & Betreuer-Guide 🎓

Hier findest du die vollständigen Lösungen für alle Aufgaben sowie Tipps, wie du den Praktikanten helfen kannst, selbst auf die Lösung zu kommen.

---

## Level 1: Die Konsole

### 1. Hallo Welt 2.0
**Lösung:**
```javascript
let name = "Alex";
console.log("Hallo " + name);
```
**Mentoren-Tipp:**
* Wenn der Praktikant vergisst, Anführungszeichen zu setzen: "Was ist der Unterschied zwischen einer Variable (Kiste) und einem Text?"
* "Wie kann man zwei Texte zusammenkleben?" (Stichwort: `+`)

### 2. Der kleine Taschenrechner
**Lösung:**
```javascript
let zahl1 = Number(prompt("Gib die erste Zahl ein:"));
let zahl2 = Number(prompt("Gib die zweite Zahl ein:"));
let ergebnis = zahl1 + zahl2;
console.log("Das Ergebnis ist: " + ergebnis);
```
**Mentoren-Tipp:**
* Oft kommt bei `prompt` das Ergebnis "105" statt 15 raus. "Warum denkt der Computer, dass 10 und 5 nur hintereinander geschrieben werden sollen? Was macht `Number()`?"
* Erkläre, dass `prompt` immer "Text-Pakete" liefert und wir diese erst in "Zahlen" umwandeln müssen.

### 3. Der Türsteher
**Lösung:**
```javascript
let alter = Number(prompt("Wie alt bist du?"));
if (alter >= 18) {
    console.log("Willkommen im Club!");
} else {
    console.log("Leider zu jung.");
}
```
**Mentoren-Tipp:**
* Frage: "Was passiert, wenn du genau 18 bist? Welches Zeichen brauchen wir, damit 18 auch noch zählt?"
* Hilf beim Verständnis der geschweiften Klammern: "Alles was zwischen `{ }` steht, passiert nur, wenn die Bedingung wahr ist."

---

## Level 2: Interaktion

### 1. Klick-Zähler
**Mentoren-Tipp:**
* Viele vergessen, die Variable `zaehler` außerhalb der Funktion zu deklarieren. Wenn sie innerhalb ist, wird sie bei jedem Klick wieder auf 0 gesetzt.
* Frage: "Wo muss die Kiste stehen, damit der Computer sich den alten Wert merkt?"

### 2. Farb-Wechsler
**Mentoren-Tipp:**
* "Wie können wir prüfen, welche Farbe gerade da ist?" -> `if (body.style.backgroundColor === "...")`.
* Erinnere an das doppelte oder dreifache Gleichheitszeichen für Vergleiche.

### 3. Namens-Begrüßer
**Mentoren-Tipp:**
* "Wie kommen wir an den Inhalt eines Input-Feldes?" -> `.value`.
* "Was ist der Unterschied zwischen `.innerText` (für den Absatz) und `.value` (für das Eingabefeld)?"

---

## Level 3: Mini-Spiele

### 1. Zahlen raten
**Lösung (Logik):**
```javascript
if (tipp === geheimzahl) {
    feedback.innerText = "Gewonnen!";
} else if (tipp < geheimzahl) {
    feedback.innerText = "Zu niedrig!";
} else {
    feedback.innerText = "Zu hoch!";
}
```
**Mentoren-Tipp:**
* Wenn der Praktikant feststeckt: "Lass uns die Logik erst in Worten aufschreiben (Pseudocode). Wenn die Zahl kleiner ist als die Geheimzahl, dann..."
* "Nutze `console.log(geheimzahl)`, um beim Testen zu schummeln!"

### 2. Schere, Stein, Papier
**Mentoren-Tipp:**
* Das Schwierigste ist der Vergleich. Hilf dabei, die Möglichkeiten zu strukturieren.
* "Wann gewinnt der Spieler? Lass uns alle drei Fälle aufschreiben und mit `||` (oder) verknüpfen."
* "Wie verwandeln wir eine Zufallszahl (0, 1, 2) in die Wörter 'Stein', 'Schere', 'Papier'?"

### 3. Reaktions-Tester
**Mentoren-Tipp:**
* Das Konzept von `setTimeout` ist oft neu. "Der erste Teil ist die Aufgabe, der zweite Teil ist die Wartezeit in Millisekunden."
* "Wie berechnet man eine Zeitdauer? (Endzeit minus Startzeit)".
* "Warum brauchen wir `Date.now()`?"

---

## Allgemeine Coaching-Tipps
1. **Nicht vorsagen!** Stelle Gegenfragen: "Was sagt die Fehlermeldung in der Konsole?", "Was hast du bisher versucht?", "Was müsste in dieser Variable stehen?"
2. **Kleine Schritte:** Wenn eine Aufgabe zu groß wirkt, zerlege sie. "Lass uns erst mal nur den Button in JS finden, bevor wir die Logik schreiben."
3. **Erfolge feiern:** Wenn der Counter das erste Mal zählt -> "High Five! Du hast gerade das DOM manipuliert!"
