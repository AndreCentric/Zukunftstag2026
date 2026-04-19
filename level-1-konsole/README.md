# Level 1: Die Konsole – Wo die Magie beginnt 🧙‍♂️

In diesem Level lernst du, wie ein Computer "denkt". Wir brauchen hier noch keine bunte Webseite, sondern konzentrieren uns nur auf die Logik.

## 🎯 Lernziele
*   Was sind **Variablen**? (Kisten, in denen man etwas speichert)
*   Wie man mit JavaScript **rechnet**.
*   Wie der Computer Entscheidungen trifft (**if-Abfragen**).
*   Wie man mit dem User spricht (`prompt` und `console.log`).

## 🛠 Vorbereitung
1.  Öffne die Datei `index.html` in diesem Ordner.
2.  Klicke unten rechts in VS Code auf **Go Live**, um die Seite im Browser zu öffnen.
3.  Öffne im Browser die **Konsole** (F12).

## 📝 Aufgaben

### 1. Hallo Welt 2.0
Öffne die Datei `script.js`.
*   Erstelle eine Variable namens `name` und speichere dort deinen Namen als Text (in Anführungszeichen, z.B. `"Alex"`).
*   Gib eine Begrüßung in der Konsole aus, die deinen Namen nutzt.
    *   *Hinweis:* `console.log("Hallo " + name);`

### 2. Der kleine Taschenrechner
Der Computer soll zwei Zahlen addieren.
*   Erstelle zwei Variablen `zahl1` und `zahl2` und gib ihnen Werte (z.B. `5` und `10`).
*   Erstelle eine Variable `ergebnis`, die die Summe der beiden berechnet.
*   Gib das Ergebnis in der Konsole aus.
*   **Zusatz:** Schaffst du es, dass der User die Zahlen selbst über ein Eingabefeld eingeben kann? Nutze dafür `prompt("Gib eine Zahl ein")`.
    *   *Achtung:* `prompt` gibt Text zurück. Um damit zu rechnen, musst du `Number(...)` drumherum schreiben.

### 3. Der Türsteher (if-Abfrage)
Wir wollen prüfen, ob jemand in einen Club darf.
*   Frage den User nach seinem Alter (nutze `prompt`).
*   Wenn das Alter **größer oder gleich 18** ist, gib aus: "Willkommen im Club!".
*   Wenn nicht, gib aus: "Leider zu jung, komm in ein paar Jahren wieder!"
*   **Logik-Rätsel:** Was passiert, wenn du genau `18` eingibst? Nutzt du `>` oder `>=`?

### 4. Die Zahlen-Schleife (Bonus)
Kannst du den Computer bis 10 zählen lassen?
*   Suche im Internet nach der `for-Schleife` in JavaScript.
*   Versuche, die Zahlen von 1 bis 10 untereinander in der Konsole auszugeben.

---

### 💡 Tipps & Hilfe
*   **Texte** müssen immer in `"Anführungszeichen"` stehen.
*   **Zahlen** schreibt man einfach so: `let x = 5;`.
*   **Bedingungen** sehen so aus:
    ```javascript
    if (alter >= 18) {
        // Mach etwas
    } else {
        // Mach was anderes
    }
    ```

Wenn du alle Aufgaben hast, zeig sie deinem Mentor und geh weiter zu [Level 2](../level-2-interaktion/README.md)!
