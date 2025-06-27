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


//ATIVIDADE 2:

//Função que gera um número aleatório e as váriáveis para contar as tentativas e receber o palpite do usuário.

const prompt = require("prompt-sync")();

// function jogoAdivinhacao() {
//     const numeroSecreto = Math.floor(Math.random() * 100) + 1;
//     let tentativas = 0;
//     let palpite;

//     //Laço while para verificar se o usuário acertou ou não o número aleatório da função jogoAdivinhacao()
//     while (true) {
//         palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
//         tentativas++;

//         if (isNaN(palpite)) {
//             console.log("Por favor, digite um número válido.");
//             continue;
//         }

//         if (palpite < 1 || palpite > 100) {
//             console.log("O número deve estar entre 1 e 100.");
//         } else if (palpite < numeroSecreto) {
//             console.log("Mais alto!");
//         } else if (palpite > numeroSecreto) {
//             console.log("Mais baixo!");
//         } else {
//             console.log(`Parabéns! Você acertou o número ${numeroSecreto} com ${tentativas} tentativa(s).`);
//             break;
//         }
//     }
// }

// // Executa o jogo ao carregar
// jogoAdivinhacao();


//ATIVIDADE 3:
// function palavrasUnicas(frase) {
//     const palavras = frase.split(" ");
//     const unicas = [];

//     for (let i = 0; i < palavras.length; i++) {
//         let repetida = false;

//         for (let j = 0; j < palavras.length; j++) {
//             if (i !== j && palavras[i] === palavras[j]) {
//                 repetida = true;
//                 break;
//             }
//         }

//         if (!repetida) {
//             unicas.push(palavras[i]);
//         }
//     }

//     return unicas;
// }

// // Exemplo de uso:
// const frase = "olá olá mundo mundo teste exemplo teste jaques";
// const resultado = palavrasUnicas(frase);
// console.log(resultado); // ["exemplo", "jaques"]

//ATIVIDADE 4:

// function fatorial(n) {
//     if (n < 0) {
//         throw new Error("Fatorial não definido para números negativos.");
//     } else if (n === 0) {
//         return 1;
//     } else {
//         return n * fatorial(n - 1);
//     }
// }

// // Exemplos de uso:
// try {
//     console.log(fatorial(5)); // 120
//     console.log(fatorial(0)); // 1
//     console.log(fatorial(-3)); // Lança erro
// } catch (e) {
//     console.error(e.message);
// }


//ATIVIDADE 5

// function debounce(fn, delay) {
//     let timeoutId = null;

//     return function (...args) {
//         if (timeoutId !== null) {
//             clearTimeout(timeoutId);
//         }

//         timeoutId = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// function aoDigitar(texto) {
//     console.log("Enviando:", texto);
// }

// const digitarComEspera = debounce(aoDigitar, 3000);

// digitarComEspera("J");
// digitarComEspera("Ju");
// digitarComEspera("Jun");
// digitarComEspera("Juni");
// digitarComEspera("Junio");


//ATIVIDADE 6:

// function memoize(fn) {
//   const cache = new Map();
  
//   return function(...args) {
//     // Cria uma chave única para os argumentos
//     const key = JSON.stringify(args);
    
//     // Se já existe no cache, retorna o valor armazenado
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
    
//     // Caso contrário, calcula, armazena no cache e retorna
//     const result = fn.apply(this, args);
//     cache.set(key, result);
//     return result;
//   };
// }

// function fatorial(n) {
//     if (n === 0) return 1;
//     let resultado = 1;
//     for (let i = 1; i <= n; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }

// const fatorialMemo = memoize(fatorial);

// console.log(fatorialMemo(5)); // Calcula e armazena
// console.log(fatorialMemo(5)); // Resultado vindo do cache
// console.log(fatorialMemo(6)); // Calcula novo


//ATIVIDADE 7:

// function nomesOrdenadosPorPreco(produtos) {
//     return produtos
//         .sort((a, b) => a.preco - b.preco)  // ordena por preço crescente
//         .map(produto => produto.nome);      // extrai apenas os nomes
// }

// const produtos = [
//     { nome: "Camiseta", preco: 29.90 },
//     { nome: "Calça", preco: 79.90 },
//     { nome: "Tênis", preco: 199.90 },
//     { nome: "Boné", preco: 19.90 }
// ];

// const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
// console.log(nomesOrdenados); // ["Boné", "Camiseta", "Calça", "Tênis"]

//ATIVIDADE 8:

// function agruparVendasPorCliente(vendas) {
//     return vendas.reduce((acumulador, venda) => {
//         const cliente = venda.cliente;
//         const total = venda.total;

//         if (acumulador[cliente]) {
//             acumulador[cliente] += total;
//         } else {
//             acumulador[cliente] = total;
//         }

//         return acumulador;
//     }, {});
// }
// const vendas = [
//     { cliente: "Ana", total: 100 },
//     { cliente: "João", total: 200 },
//     { cliente: "Ana", total: 50 },
//     { cliente: "Carlos", total: 300 },
//     { cliente: "João", total: 150 }
// ];

// const resultado = agruparVendasPorCliente(vendas);
// console.log(resultado);


//ATIVIDADE 9:

// function paresParaObjeto(pares) {
//     const obj = {};
//     for (let i = 0; i < pares.length; i++) {
//         const chave = pares[i][0];
//         const valor = pares[i][1];
//         obj[chave] = valor;
//     }
//     return obj;
// }
// function objetoParaPares(obj) {
//     const pares = [];
//     for (let chave in obj) {
//         if (obj.hasOwnProperty(chave)) {
//             pares.push([chave, obj[chave]]);
//         }
//     }
//     return pares;
// }
// const pares = [["nome", "Ana"], ["idade", 25], ["cidade", "São Paulo"]];
// const objeto = paresParaObjeto(pares);
// console.log(objeto);
// // { nome: 'Ana', idade: 25, cidade: 'São Paulo' }

// const novoArray = objetoParaPares(objeto);
// console.log(novoArray);
// // [ ["nome", "Ana"], ["idade", 25], ["cidade", "São Paulo"] ]

