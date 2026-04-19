# Mini-Game 3: Reaktions-Tester ⏱️

Wie schnell bist du wirklich? Ein Feld wechselt die Farbe, und du musst so schnell wie möglich klicken!

## 🎯 Lernziel
*   Arbeiten mit Zeit (`Date.now()` oder `performance.now()`).
*   Verzögerungen einbauen (`setTimeout`).
*   Dynamische CSS-Änderungen.

## 📝 Deine Aufgaben

1.  **Das Spielfeld:** Erstelle ein großes `div` (z.B. ein Quadrat), das am Anfang rot ist.
2.  **Der Start:** Wenn man auf einen "Start"-Button klickt, soll nach einer **zufälligen Zeit** (zwischen 2 und 5 Sekunden) die Farbe des Quadrats auf Grün wechseln.
    *   *Tipp:* Nutze `setTimeout(funktion, millisekunden)`.
3.  **Die Zeitmessung:**
    *   Sobald die Farbe auf Grün springt, speichere die aktuelle Zeit in einer Variablen `startZeit`.
    *   Wenn der User dann auf das grüne Quadrat klickt, speichere die Zeit in `endZeit`.
    *   Berechne die Differenz: `reaktionsZeit = endZeit - startZeit`.
4.  **Das Ergebnis:** Zeige die Reaktionszeit in Millisekunden an.

## 💡 Tipps
*   `Date.now()` gibt dir die aktuelle Zeit in Millisekunden.
*   Was passiert, wenn der User klickt, während das Feld noch rot ist? Kannst du eine "Schummel-Sperre" einbauen?

## 🚀 Zusatz-Challenge
Schaffst du es, eine "Bestenliste" (Highscore) zu führen, die den schnellsten Klick des Tages speichert?
