
const nome = prompt("Insira o nome do aluno: ");
let nota1 = Number(prompt("Insira a primeira nota: ")), nota2 = Number(prompt("Insira a segunda nota: "));

function calcMedia(nota1, nota2){
    return ((nota1 + nota2) / 2).toFixed(1);
}

const deci = calcMedia(nota1, nota2) >= 7 ? `Parabéns, ${nome}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${nome}! Tente novamente!`

alert(`A média do(a) aluno(a) ${nome} é: ${calcMedia(nota1, nota2)}` + '\n' + deci);