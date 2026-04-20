# Profi-Projekt 2: Code-Clicker 💻🖱️

Baue dein eigenes "Incremental Game". Klicke auf den Computer, um "Code-Zeilen" zu generieren, und kaufe Upgrades, um noch schneller zu werden!

## 🎯 Lernziel
*   Wirtschafts-Logik (Kosten vs. Ertrag).
*   Automatische Abläufe mit `setInterval`.
*   Das Interface dynamisch aktualisieren.

## 📝 Deine Aufgaben

1.  **Das Haupt-Element:** Erstelle einen großen Button oder ein Bild (z.B. einen Laptop), auf den man klicken kann.
2.  **Die Währung:** Erstelle eine Variable `zeilen`. Jedes Mal, wenn du klickst, erhöht sich die Zahl um 1.
3.  **Der Shop:** Erstelle Upgrades, die man kaufen kann, zum Beispiel:
    *   **Kaffee:** Kostet 10 Zeilen. Erhöht die Zeilen pro Klick um +1.
    *   **Praktikant:** Kostet 50 Zeilen. Generiert automatisch 1 Zeile pro Sekunde.
    *   **KI-Assistent:** Kostet 200 Zeilen. Generiert automatisch 10 Zeilen pro Sekunde.
4.  **Die Logik:**
    *   Prüfe beim Kauf: Hat der Spieler genug "Zeilen"? Wenn ja, ziehe die Kosten ab und aktiviere den Bonus.
    *   Nutze `setInterval`, um die automatischen Zeilen jede Sekunde hinzuzufügen.
    *   Aktualisiere die Anzeige auf der Webseite bei jedem Klick und jeder Sekunde.

## 💡 Tipps
*   **Deaktivieren:** Du kannst Buttons deaktivieren, wenn der Spieler nicht genug Geld hat: `button.disabled = true;`.
*   **Intervall:** Für den automatischen Zuwachs brauchst du `setInterval(function() { ... }, 1000);`.
*   **Formatierung:** Wenn die Zahlen sehr groß werden, sieht es schöner aus, sie zu runden oder zu formatieren.

## 🚀 Zusatz-Challenge
*   **Preise steigen:** Jedes Mal, wenn man ein Upgrade kauft, wird es 20% teurer.
*   **Speichern:** Kannst du es schaffen, dass der Punktestand gespeichert wird, wenn man die Seite neu lädt? (Suche nach `localStorage`).
*   **Erfolge:** Blende eine Nachricht ein, wenn der Spieler insgesamt 1000 Zeilen erreicht hat.
