# Mini-Game 1: Zahlen raten 🔢

Der Computer denkt sich eine Zahl zwischen 1 und 100 aus. Du musst sie erraten, und der Computer sagt dir, ob deine Zahl zu hoch oder zu niedrig war.

## 🎯 Lernziel
*   Zufallszahlen generieren.
*   Zahlen vergleichen.
*   Einen Spiel-Zustand (Versuche zählen) speichern.

## 📝 Deine Aufgaben

1.  **Die Geheimzahl:** Erstelle eine Variable `geheimzahl`. Der Computer soll hier eine Zufallszahl zwischen 1 und 100 speichern.
    *   *Tipp:* `Math.floor(Math.random() * 100) + 1;`
2.  **Das Interface:** Du brauchst ein Eingabefeld (`input`), einen Button "Raten" und ein Textfeld für die Antwort ("Zu hoch", "Zu niedrig" oder "Gewonnen!").
3.  **Die Logik:** Wenn der Button geklickt wird:
    *   Lies die Zahl aus dem Eingabefeld aus.
    *   Vergleiche sie mit der `geheimzahl`.
    *   Gib die passende Antwort auf der Webseite aus.
4.  **Der Versuchs-Zähler:** Zähle mit, wie viele Versuche der Spieler gebraucht hat. Zeige die Anzahl der Versuche an, wenn er gewonnen hat.

## 💡 Tipps
*   Vergiss nicht `Number()` zu nutzen, wenn du die Zahl aus dem Eingabefeld liest, sonst vergleicht der Computer Text mit einer Zahl!
*   Überlege dir: Wann soll der Versuchs-Zähler wieder auf 0 gesetzt werden? (Vielleicht ein Button "Neues Spiel"?)

## 🚀 Zusatz-Challenge
Kannst du das Spiel schwerer machen? Zum Beispiel, indem der Spieler nur 10 Versuche hat? Wenn er 10-mal falsch rät, hat er verloren.
