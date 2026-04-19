# Level 2: Deine Webseite lebt! ⚡️

Bisher haben wir nur in der Konsole gearbeitet. Jetzt bringen wir Leben auf die Webseite! Wir wollen, dass Dinge passieren, wenn wir auf Buttons klicken oder Text in Felder eingeben.

## 🎯 Lernziele
*   **Events:** Auf Klicks reagieren.
*   **DOM-Manipulation:** Texte auf der Webseite per JavaScript ändern.
*   **Input:** Werte aus Textfeldern auslesen.

## 📝 Aufgaben

### 1. Der Klick-Zähler
Wir bauen einen Button, der zählt, wie oft man auf ihn geklickt hat.
*   Erstelle in der `index.html` einen Button mit einer ID (z.B. `id="zaehlButton"`) und einen Text (z.B. `<p id="anzeige">0</p>`).
*   In `script.js`:
    1.  Erstelle eine Variable `zaehler`, die bei `0` startet.
    2.  Nutze `document.getElementById("zaehlButton")`, um den Button in JavaScript zu finden.
    3.  Füge einen "Event Listener" hinzu, der bei `"click"` eine Funktion ausführt.
    4.  In dieser Funktion soll `zaehler` um 1 erhöht werden.
    5.  Ändere den Text in der Anzeige mit `.innerText = zaehler;`.

### 2. Der Farb-Wechsler
Lass uns den Hintergrund der Seite ändern.
*   Erstelle einen weiteren Button "Hintergrund ändern".
*   Wenn man darauf klickt, soll sich die Hintergrundfarbe (`document.body.style.backgroundColor`) auf eine neue Farbe ändern (z.B. `"lightblue"`).
*   **Zusatz:** Kannst du es so programmieren, dass die Farbe bei jedem Klick zwischen zwei Farben hin- und herwechselt? (Tipp: Nutze ein `if`).

### 3. Namens-Begrüßer
*   Erstelle ein Eingabefeld (`<input type="text" id="nameInput">`) und einen Button "Senden".
*   Wenn man auf "Senden" klickt, soll ein Text auf der Seite erscheinen: "Hallo [Name aus dem Feld], schön dich zu sehen!".
    *   *Tipp:* Du bekommst den Text aus dem Feld mit `.value`.

---

### 💡 Tipps & Hilfe

**Wie finde ich Elemente?**
```javascript
let meinElement = document.getElementById("meineID");
```

**Wie reagiere ich auf Klicks?**
```javascript
meinElement.addEventListener("click", function() {
    // Hier den Code reinschreiben, der beim Klick passieren soll
});
```

**Wie ändere ich Text?**
```javascript
meinElement.innerText = "Neuer Text";
```

Alles fertig? Dann bist du jetzt bereit für die echten Spiele in [Level 3](../level-3-mini-spiele/README.md)!
