# Mentor-Guide: So begleitest du den Praktikanten

Schön, dass du dir Zeit für den Nachwuchs nimmst! Dieses Repo ist so aufgebaut, dass der Praktikant (13 Jahre, leichte Vorkenntnisse) möglichst eigenständig arbeitet. Deine Rolle ist die eines **Coaches**, nicht die eines Lehrers.

## 🎯 Deine wichtigsten Aufgaben
1.  **Motivation:** Feiere kleine Erfolge (die erste Konsolen-Ausgabe, der erste funktionierende Button).
2.  **Fragen stellen:** Wenn er feststeckt, gib nicht die Lösung vor, sondern stelle Leitfragen.
3.  **Fehlersuche beibringen:** Zeige ihm, wie man die Browser-Konsole (F12) nutzt, um Fehler zu finden.

## 🛠 Hilfe zur Selbsthilfe
*   **Die 15-Minuten-Regel:** Lass ihn bei einem Problem erst mal 10-15 Minuten selbst tüfteln und im Internet suchen (z.B. bei MDN oder W3Schools).
*   **Sokratische Methode:**
    *   *Praktikant:* "Wie mache ich eine Zufallszahl?"
    *   *Du:* "Was würdest du bei Google eingeben, um das herauszufinden? Lass uns mal nach 'javascript random number' suchen."
*   **Code-Review:** Lass ihn dir erklären, was sein Code gerade macht. Wenn er es erklären kann, hat er es verstanden.

## ⚠️ Typische Stolpersteine (und wie du hilfst)
*   **Datentypen:** `prompt()` liefert immer Text (String). `"5" + "5"` ergibt `"55"`. Erkläre ihm den Unterschied zwischen Text und Zahl, wenn er beim Taschenrechner-Projekt hängen bleibt.
*   **Syntax:** Fehlende Klammern `}`, Semikolons (optional, aber gut) oder falsche Groß-/Kleinschreibung (`console.Log` vs `console.log`).
*   **Scope:** Variablen, die innerhalb einer Funktion definiert sind und draußen gebraucht werden. Erkläre das Konzept "Was in der Box ist, bleibt in der Box".

## 📅 Zeitplan-Vorschlag
*   **09:00 - 10:00:** Level 0 & Level 1 (Grundlagen & Konsole)
*   **10:00 - 12:00:** Level 2 (DOM-Manipulation & erste interaktive Elemente)
*   **12:00 - 13:00:** *Mittagspause*
*   **13:00 - 15:30:** Level 3 (Eigene Spiele bauen)
*   **15:30 - 16:00:** Präsentation (lass ihn seine Spiele anderen Kollegen zeigen!)

## 🤫 Musterlösungen
Versuche, keine fertigen Lösungen im Repo zu lassen. Wenn er absolut nicht weiterkommt, schreibe mit ihm zusammen 2-3 Zeilen Code, aber lass ihn die restliche Logik selbst vervollständigen.

Viel Erfolg! Du machst das super.
