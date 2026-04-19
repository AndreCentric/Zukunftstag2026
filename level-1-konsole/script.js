// Hier beginnt dein Abenteuer!

// Aufgabe 1: Hallo Welt 2.0
let name = "Alex";
console.log("Hallo " + name);


// Aufgabe 2: Der kleine Taschenrechner
let zahl1 = Number(prompt("Gib die erste Zahl ein:"));
let zahl2 = Number(prompt("Gib die zweite Zahl ein:"));
let ergebnis = zahl1 + zahl2;
console.log("Das Ergebnis ist: " + ergebnis);


// Aufgabe 3: Der Türsteher
let alter = Number(prompt("Wie alt bist du?"));
if (alter >= 18) {
    console.log("Willkommen im Club!");
} else {
    console.log("Leider zu jung, komm in ein paar Jahren wieder!");
}

// Aufgabe 4: Die Zahlen-Schleife (Bonus)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
