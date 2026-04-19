// 1. Variablen für Punkte und DOM-Elemente
let spielerScore = 0;
let computerScore = 0;

const computerWahlAnzeige = document.getElementById("computerWahlAnzeige");
const ergebnisAnzeige = document.getElementById("ergebnisAnzeige");
const spielerScoreAnzeige = document.getElementById("spielerScore");
const computerScoreAnzeige = document.getElementById("computerScore");

// 2. Funktion für Computer-Wahl
function holeComputerWahl() {
    const wahlen = ["Stein", "Schere", "Papier"];
    const zufall = Math.floor(Math.random() * 3);
    return wahlen[zufall];
}

// 3. Funktion für die Spiel-Logik
function spiele(spielerWahl) {
    const computerWahl = holeComputerWahl();
    computerWahlAnzeige.innerText = computerWahl;

    if (spielerWahl === computerWahl) {
        ergebnisAnzeige.innerText = "Unentschieden!";
    } else if (
        (spielerWahl === "Stein" && computerWahl === "Schere") ||
        (spielerWahl === "Schere" && computerWahl === "Papier") ||
        (spielerWahl === "Papier" && computerWahl === "Stein")
    ) {
        ergebnisAnzeige.innerText = "Du gewinnst die Runde!";
        spielerScore++;
    } else {
        ergebnisAnzeige.innerText = "Computer gewinnt die Runde!";
        computerScore++;
    }

    spielerScoreAnzeige.innerText = spielerScore;
    computerScoreAnzeige.innerText = computerScore;

    if (spielerScore === 3) {
        ergebnisAnzeige.innerText = "🎉 DU HAST DAS SPIEL GEWONNEN!";
        resetScores();
    } else if (computerScore === 3) {
        ergebnisAnzeige.innerText = "💀 COMPUTER HAT GEWONNEN!";
        resetScores();
    }
}

function resetScores() {
    spielerScore = 0;
    computerScore = 0;
}

// 4. Event-Listener für die Buttons
document.getElementById("stein").addEventListener("click", () => spiele("Stein"));
document.getElementById("schere").addEventListener("click", () => spiele("Schere"));
document.getElementById("papier").addEventListener("click", () => spiele("Papier"));
