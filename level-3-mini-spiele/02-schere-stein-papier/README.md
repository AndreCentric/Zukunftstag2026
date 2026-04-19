# Mini-Game 2: Schere, Stein, Papier ✂️🪨📄

Du spielst gegen den Computer. Wer gewinnt zuerst 3 Runden?

## 🎯 Lernziel
*   Komplexere Logik-Verknüpfungen.
*   Arbeiten mit Funktionen.
*   Zufallsauswahl aus einer Liste.

## 📝 Deine Aufgaben

1.  **Das Design:** Du brauchst drei Buttons (Schere, Stein, Papier) und ein Feld, in dem steht, was der Computer gewählt hat und wer gewonnen hat.
2.  **Die Wahl des Computers:**
    *   Erstelle eine Funktion, die zufällig "Schere", "Stein" oder "Papier" zurückgibt.
    *   *Tipp:* Erzeuge eine Zufallszahl zwischen 1 und 3. Wenn 1 -> Stein, wenn 2 -> Schere, usw.
3.  **Die Spiel-Logik:** Schreibe eine Funktion `spieleRunde(spielerWahl)`, die aufgerufen wird, wenn du auf einen Button klickst.
    *   Vergleiche `spielerWahl` mit `computerWahl`.
    *   Es gibt 3 Möglichkeiten: Sieg, Niederlage oder Unentschieden.
4.  **Punktestand:** Erstelle zwei Variablen `spielerPunkte` und `computerPunkte`. Wer eine Runde gewinnt, bekommt einen Punkt. Zeige den Stand auf der Webseite an.

## 💡 Tipps
*   Nutze `console.log`, um zu sehen, was der Computer gewählt hat, bevor du es auf der Webseite anzeigst.
*   Ein Unentschieden ist am einfachsten: `if (spielerWahl === computerWahl)`.

## 🚀 Zusatz-Challenge
Kannst du Bilder statt Text-Buttons verwenden? Oder einen "Reset"-Button einbauen, der die Punkte wieder auf 0 setzt?
