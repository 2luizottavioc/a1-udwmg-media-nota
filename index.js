const prompt = require("prompt-sync")();

const nStudents = parseInt(prompt("Para quantos alunos você deseja inserir notas? "));
const isNumber = !isNaN(nStudents);

if (!isNumber) return console.log("Por favor, digite um número!");
if (nStudents < 0) return console.log("Por favor, digite um número positivo!");
if (nStudents === 0) return console.log("Programa encerrado!");

let scoresByStudents = [];
for(let i = 0; i < nStudents; i++) {
    console.log();
    const originalName = prompt(`Qual é o nome do ${i+1}° estudante? `).trim();
    if (!originalName) return console.log("Por favor, digite um nome valido!");
    
    const name = originalName[0].toUpperCase() + originalName.slice(1).toLowerCase();
    
    let scores = [];
    for(let j = 0; j < 3; j++) {
        const score = parseFloat(prompt(`Qual é a ${j+1}ª nota de "${name}"? `));
        const scoreIsNumber = !isNaN(score);
        if (!scoreIsNumber) return console.log("Por favor, digite uma nota valida!");

        const treatedScore = parseFloat(score.toFixed(2));
        scores.push(treatedScore);
    }

    const avg = scores.reduce((a, b) => a + b) / scores.length;
    const avgIsNumber = !isNaN(avg);
    if (!avgIsNumber) return console.log("Ops... ocorreu algum erro inesperado na contagem das notas. Tente novamente!");

    scoresByStudents.push({ name, scores, avg });
}

if(!scoresByStudents.length) return console.log("Programa encerrado!");

console.log("\n--- Notas dos alunos ---");

scoresByStudents.forEach(({ name, scores, avg }) => {
    console.log(`\nResumo de "${name}":`);
    console.log(`- Notas: ${scores.join(", ")}`);
    console.log(`- Média: ${avg.toFixed(2)}`);
});

console.log("\nPrograma encerrado!");
return;