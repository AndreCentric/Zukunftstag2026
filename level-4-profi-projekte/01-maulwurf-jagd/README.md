# Profi-Projekt 1: Maulwurf-Jagd 🔨🐹

Ein Maulwurf taucht zufällig aus seinen Löchern auf und du musst ihn anklicken, bevor er wieder verschwindet!

## 🎯 Lernziel
*   Arbeiten mit mehreren Elementen gleichzeitig (Listen/Arrays).
*   Zufällige Intervalle nutzen.
*   Punkte-System und Spiel-Timer kombinieren.

## 📝 Deine Aufgaben

1.  **Das Spielfeld:** Erstelle in HTML mehrere "Löcher" (z.B. 6 `div`-Elemente). In jedem Loch steckt ein "Maulwurf"-Element, das am Anfang versteckt ist.
2.  **Maulwurf zeigen:** Schreibe eine Funktion `zeigeMaulwurf()`, die:
    *   Ein zufälliges Loch auswählt.
    *   Den Maulwurf in diesem Loch sichtbar macht (z.B. durch Hinzufügen einer CSS-Klasse).
    *   Nach einer kurzen Zeit (z.B. 800ms) den Maulwurf wieder versteckt.
3.  **Die Jagd:** Wenn man auf einen sichtbaren Maulwurf klickt:
    *   Erhöhe den Punktestand.
    *   Verstecke den Maulwurf sofort wieder.
4.  **Der Spielablauf:**
    *   Starte das Spiel über einen Button.
    *   Lass alle paar Sekunden einen neuen Maulwurf auftauchen.
    *   Nach 30 Sekunden ist das Spiel vorbei.

## 💡 Tipps
*   **CSS-Klassen:** Nutze eine CSS-Klasse `.hoch`, um den Maulwurf anzuzeigen. Mit `element.classList.add('hoch')` und `remove` kannst du das in JavaScript steuern.
*   **Zufall:** Nutze ein Array für deine Löcher: `let loecher = document.querySelectorAll('.loch');`. So kannst du mit `loecher[index]` ein zufälliges auswählen.
*   **Wiederholung:** Mit `setInterval` kannst du den Maulwurf immer wieder auftauchen lassen.

## 🚀 Zusatz-Challenge
*   Werde schneller! Lass die Maulwürfe mit der Zeit immer kürzer oben bleiben.
*   Füge ein "Bonus-Tier" hinzu (z.B. einen goldenen Hasen), der extra viele Punkte gibt, aber nur ganz kurz erscheint.
