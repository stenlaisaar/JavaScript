// Algandmed
const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores]; // koopia, mida saab muuta
 
// -------------------------------------------------------------
// Viited DOM-ile
// -------------------------------------------------------------
const scoreList = document.getElementById("scoreList");
const result = document.getElementById("result");
 
const kpiCount = document.getElementById("kpi-count");
const kpiAvg = document.getElementById("kpi-avg");
const kpiTh = document.getElementById("kpi-th");
 
const countInput = document.getElementById("count");

// Tulemuste kuvamine

function renderScores(){
    scoreList.innerHTML = "";
    currentScores.forEach((score) => {
        const item = document.createElement("p");
        item.textContent = score;
        scoreList.appendChild(item);
    });
}

// +5 punkti kõigile

function addBonus(){
    currentScores = currentScores.map((score) => score + 5);
    renderScores(currentScores);
}

// Filter. Jätab alles ainult need, mille väärtus on 60 või suurem

function filterByThreshold(){
    currentScores = currentScores.filter((score) <= 60);
    renderScores(filterByThreshold);
}