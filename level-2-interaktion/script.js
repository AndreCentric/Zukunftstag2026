// Aufgabe 1: Der Klick-Zähler
let zaehler = 0;
let btn = document.getElementById("zaehlButton");
let anzeige = document.getElementById("anzeige");

btn.addEventListener("click", function() {
    zaehler = zaehler + 1;
    anzeige.innerText = zaehler;
});


// Aufgabe 2: Der Farb-Wechsler
let farbBtn = document.getElementById("farbButton");
farbBtn.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
});


// Aufgabe 3: Namens-Begrüßer
let nameInput = document.getElementById("nameInput");
let sendBtn = document.getElementById("sendBtn");
let begruessung = document.getElementById("begruessung");

sendBtn.addEventListener("click", function() {
    let name = nameInput.value;
    begruessung.innerText = "Hallo " + name + ", schön dich zu sehen!";
});
