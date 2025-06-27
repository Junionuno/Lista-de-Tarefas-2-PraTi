// EXERCÍCIO 1:

// let num1 = 4

// if (num1 % 2 == 0) {
//     console.log('PAR')
// }else{
//     console.log('IMPAR')
// }

// EXERCÍCIO 2:

// let num1 = 50
// let num2 = 29
// let num3 = 39

// if (num1 > num2 && num1 > num3){
//     console.log("NÚMERO 1 É MAIOR")
// }else if (num2 > num1 && num2 > num3){
//     console.log("NÚMERO 2 É MAIOR")
// }else {
//     console.log("NÚMERO 3 É MAIOR")
// }


// let a = true
// let b = false

// console.log(a && (b || !a))

// Exercício 2 aula 4:

// let escolha = prompt('Escolha um número: ')
// let num = parseInt(escolha)

// if ((num % 2) == 0){
//     console.log('Esse número não é primo, ele é par!')
// }else if (((num / 1) == num) && ((num / num) == 1)) {
//     console.log('Esse número é primo!')
// }

// Exercício 3 aulas 4:

// let escolha1 = prompt('Escolha o primeiro número: ')
// let num1 = parseInt(escolha1);

// let escolha2 = prompt('Escolha o segundo número: ')
// let num2 = parseInt(escolha2)

// let opcao = prompt('Qual operação deseja realizar: x, /, -, +  ')
// resultado = 0

// switch (opcao) {
//     case 'x':
//         resultado = num1 * num2 
//         break;
//     case '/':
//         resultado = num1 / num2
//         break;
//     case '+':
//         resultado = num1 += num2
//         break;
//     case '-':
//         resultado = num1 -= num2
//         break
// }

// console.log('O resultado é: ', resultado)

// AULA 5

// let contador = 0

// while (contador <= 10){
//     console.log('5 x ', contador, '=', 5 * contador)
//     contador = contador + 1
// }

// AULA 6 

// let celsius = Number(prompt('Escreva o valor em C para converter em F: '))

// console.log(celsius, 'ºC é igual a = ', celsius * (9/5) + 32, 'ºF')

// let eleitores = Number(prompt('Quantos eleitores possui a cidade: '));

// let brancos = Number(prompt('Quantos votos foram BRANCOS: '))
// let nulos = Number(prompt('Quantos votos foram NULOS: '))
// let validos = Number(prompt('Quantos votos foram VÁLIDOS: '))

// let percentualBrancos = brancos / eleitores * 100
// let percentualNulos = nulos / eleitores * 100
// let percentualValidos = validos / eleitores * 100

// console.log('Votos válidos: ', percentualValidos, '%')
// console.log('Votos Brancos: ', percentualBrancos, '%')
// console.log('Votos Nulos: ', percentualNulos, '%')

// let turmaC = 60
// let turmaD = 20

// let reprovadosTurmaC = Number(prompt('Quantos alunos foram reprovados na TURMA C? '))
// let aprovadosTurmaD = Number(prompt('Quantos alunos foram aprovados na TURMA D? '))

// let reprovadosTurmaD = turmaD - aprovadosTurmaD
// let reprovadosTotal = reprovadosTurmaC + reprovadosTurmaD

// console.log('Alunos reprovados na turma C: ', reprovadosTurmaC)
// console.log('Alunos reprovados na turma D: ', reprovadosTurmaD)
// console.log('Alunos reprovados ao total: ', reprovadosTotal)

// let dia = prompt('Digite o dia da semana: ')

// if (dia === 'Sabado' || dia === 'Domingo'){
//     console.log('Final de Semana!')
// }else if (dia === 'Segunda' || dia === 'Terça' || dia === 'Quarta' || dia === 'Quinta' || dia === 'Sexta'){
//     console.log('Dia útil!')
// }else{
//     console.log('Você não digitou um dia válido!')
// }

const prompt = require("prompt-sync")();

let num = undefined

while (num != 0){
    num = Number(prompt('Digite um número: '))
    if (num > 0){
        console.log('POSITIVO')
    }else if (num == 0){
        break
    }else{
        console.log('NEGATIVO')
    }
}

// let senha
// let correta = '2807'
// do {
//     senha = prompt('Digite a senha: ')
//     if (senha != correta){
//         console.log('SENHA INVÁLIDA!')
//     }else{
//         console.log('ACESSO PERMITIDO!')
//     }
// }while (senha != '2807')