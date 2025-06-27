//ATIVIDADE 1:

//Função para verificar se aquele ano inserido é bissexto ou não
// function anoBissexto(ano){
//     if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
//         return true 
//     }else{
//         return false
//     }
// }

// //Função que verifica se a data inserida é válida
// function ehDataValida(dia, mes, ano){
//     if(ano < 1 || mes < 1 || mes > 12 || dia < 1){
//         return false
//     }
    
//     //Array que recebe os dias que cada mês tem, na posição 1 chama a função anoBissexto para poder verificar se Fevereiro terá 28 ou 29 dias.
//     let diasMes = [31, (anoBissexto(ano) ? 28 : 29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
//     return dia <= diasMes[mes - 1]
// }

// console.log(ehDataValida(31, 2, 2020))//Exemplo utilizado 
// console.log(ehDataValida(26, 6, 2025))