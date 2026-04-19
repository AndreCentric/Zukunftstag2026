# 📜 Spickzettel (Cheat Sheet) für Level 1

Hier findest du alle wichtigen Befehle, die du für die ersten Schritte in JavaScript brauchst.

## 1. Variablen (Kisten für Daten)
Mit Variablen kannst du dir Dinge merken. Stell sie dir wie eine Kiste vor, auf der ein Name steht.
```javascript
let name = "Alex";      // Text (String) – immer in Anführungszeichen
let alter = 13;         // Zahl (Number) – ohne Anführungszeichen
```

## 2. Ausgabe (Mit dem User sprechen)
Damit der Computer dir etwas anzeigt, nutzen wir die Konsole.
```javascript
console.log("Hallo Welt!"); // Schreibt Text in die Konsole
console.log(name);          // Schreibt den Inhalt der Variable 'name'
```

## 3. Eingabe (Den User fragen)
Wenn du den User etwas fragen willst, öffnet sich ein kleines Fenster.
```javascript
let antwort = prompt("Wie geht es dir?");
```

## 4. Rechnen & Datentypen
Computer können super rechnen, aber sie müssen wissen, ob etwas eine **Zahl** oder ein **Text** ist.
*   `prompt()` gibt uns **immer Text** zurück.
*   `Number()` verwandelt Text in eine echte Zahl.

```javascript
let zahlAlsText = "10";
let echteZahl = Number(zahlAlsText); // Jetzt kann man damit rechnen!

let summe = 5 + 10;  // 15
let nameKombi = "Hallo " + "Alex"; // "Hallo Alex" (Texte zusammenfügen)
```

## 5. Bedingungen (Entscheidungen treffen)
Mit `if` (wenn) und `else` (sonst) kann dein Programm entscheiden, welchen Weg es geht.
```javascript
if (alter >= 18) {
    console.log("Du bist erwachsen.");
} else {
    console.log("Du bist noch minderjährig.");
}
```

### Wichtige Zeichen für Vergleiche:
*   `>` größer als
*   `<` kleiner als
*   `>=` größer oder gleich
*   `<=` kleiner oder gleich
*   `===` genau gleich
