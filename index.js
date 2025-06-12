// ex 1
// DizOi = (nome) => {
//     return "Olá, " + nome;
// }

// console.log(DizOi("weuller"));

// ------------//-----------------
// ex 2

// let umAno = 365

// DiasDeVida = (idade) => {
//     return umAno * idade;
// }
// console.log(DiasDeVida(25));

// ------------//-----------------

// ex 3
// CalculaHora = (horas, valorHora) => {
//     let result = horas * valorHora;
//     return "Salario igual R$ "+ result;
// }
// console.log(CalculaHora(150, 40.5));

// ------------//-----------------

// ex 4
// VerificaMes = (mes) =>{
//     if(mes = 1){
//         return "Janeiro"
//     }else if(mes = 2){
//         return "Fevereiro"
//     }else if(mes = 3){
//         return "Março"
//     }else if(mes = 4){
//         return "Abril"
//     }else if(mes = 5){
//         return "Maio"
//     }else if (mes = 6){
//         return "Junho"
//     }else if(mes = 7){
//         return "Julho"
//     }else if(mes = 8){
//         return "Agosto"
//     }else if(mes = 9){
//         return "Setembro"
//     }else if(mes = 10){
//         return "Outubro"
//     }else if(mes = 11){
//         return "Novembro"
//     }else if (mes = 12){
//         return "Dezembro"
//     }else{
//         return "Mês invalido"
//     }
// }
// console.log(VerificaMes(5));

// const meses = ["janeiro", "fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
// verificarMes = (mes) =>{
//     if(mes >= 1 && mes <= 12){
//         console.log (meses[mes - 1]);
//     }
//     else{
//         console.log("Mês invalido");
//     }
// }
// verificarMes(5);

// ------------//---------------f--

// ex 5evereiro
// maiorOuIgual = (num1, num2) => {
//     if(num1 > num2 || num1 === num2){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// maiorOuIgual(0, 0);
// maiorOuIgual(0, "0");
// maiorOuIgual(5, 1);

// ------------//-----------------

// ex 6

// verifica = (num) => {
//     if (typeof num === 'boolean') {
//         console.log(!num);
//     } else if (typeof num === 'string') {
//         console.log("booleano ou número esperados, mas o parâmetro é do tipo string");
//     } else if (typeof num === 'number') {
//         console.log(num * -1);
//     } else {
//         console.log("Tipo não reconhecido");
//     }
// }

// verifica(true);
// verifica('6');
// verifica(-2000);
// verifica('Programação');

// ------------//-----------------
// ex 7

// const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
//     if (inclusivo) {
//         return numero >= minimo && numero <= maximo;
//     } else {
//         return numero > minimo && numero < maximo;
//     }
// };

// console.log(estaEntre(51, 50, 100)); // true
// console.log(estaEntre(16, 100, 160)); // false
// console.log(estaEntre(4, 3, 150)); // false
// console.log(estaEntre(3, 3, 150, true)); // true

// ------------//-----------------
// ex 8

// multi = (a, b) => {
//     let result = 0;
//     for (let i = 0; i < b; i++) {
//         result += a;
//     }
//     console.log(result)
// }

// multi(5, 5);
// multi(0,7);

// ------------//-----------------
// ex 9

// let array = [];

// repete = (a, b) => {
// for (let i = 0; i < b; i++) {
//   array.push(a);
// }
// console.log(array)
// }
// repete(5, 5);

// ------------//-----------------
// ex 10

// simbolo = (num) => {
//     let plus = [];
//   for (let i = 0; i < num; i++) {
//     plus += "+";
//   }
//   console.log(plus);
// };
// simbolo(5);
// simbolo(2);

// ------------//-----------------

// ex 11

// let array = [7, 14, "ola"];

// transfer = (Umarray) => {
//   let novoArray = [Umarray[0], Umarray[Umarray.length - 1]];
//   console.log(novoArray);
// };
// transfer(array);

// ------------//-----------------
// ex 12

// const objeto = {
//   nome: "João",
//   numero: 3,
//   numeroStr: "3",
//   algo: "web",
//   idade: 25,
// };

// removeProp = (objeto, propriedade) => {
//   const copia = {...objeto};
//   delete copia[propriedade];
//   return(copia);
// }
// const result = removeProp(objeto, "numeroStr");

// console.log(removeProp(objeto, "numeroStr"));
// console.log(Object.is(result, objeto));

// ------------//-----------------
// ex 13

// let array = ["javascript", 1 , "3", "web", 20];

// removeStr = (array) => {
//   let novoArray = array.filter((item) => {
//     return typeof item !== "string";
//   })
//   return novoArray;
// }
// console.log(removeStr(array));

// ------------//-----------------
// ex 14

// let objeto = {
//   nome: "Maria",
//   profissao: "Desenvolvedora"
// }

// let objeto = {
//   codigo: 11111,
//   preco: 12000,
// }

// reciveParameters = (obj) => {
//   const array = Object.values(obj);
//   return array;
// }
// console.log(reciveParameters(objeto));

// ------------//-----------------
// ex 15

// let num2 = [1, 2, 3, 4];
// let num = [10, 70, 22, 43, 57, 58, 60];

// verificaPares = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 0 && array[i] % 2 == 0) {
//       console.log(array[i]);
//     }
//   }
// };
// verificaPares(num);

// ------------//-----------------
// ex 16

// let ano1 = 2020;
// let ano2 = 2010;

// verificaAno = (ano) => {
//   if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }
// verificaAno(ano1);
// verificaAno(ano2);

// ------------//-----------------
// ex 17

// let array1 = [10, 10, 10];
// let array2 = [10, 20, 30];
// let array3 = [10, 20, 30, 40, 50];

// somaArray = (array) => {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     result += array[i];
//   }
//   console.log(result);
// };
// somaArray(array2);
// somaArray(array1);
// somaArray(array3);

// ------------//-----------------
// ex 18

// let prods = [
//   { id: 1, nome: "produto 1", preco: 89.99 },
//   { id: 2, nome: "produto 2", preco: 150 },
// ];

// let eletronicos = [
//   { id: 1, nome: "Galaxy s20", preco: 3599.99},
//   { id: 2, nome: "Macbook Pro", preco: 30999.90},
// ]

// SomaValores = (obj) => {
//   let valorTotal = obj.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
//   console.log(valorTotal);
// };
// SomaValores(prods);
// SomaValores(eletronicos);

// ------------//-----------------
// ex 19

// let num = [0, 10];
// let num2 = [1, 2, 3, 4, 5];

// somaArray = (array) => {
//   let result = 0;
//   const somaGeral = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
//   result = somaGeral / array.length;
//   console.log(result);
// };

// somaArray(num);
// somaArray(num2);

// ------------//-----------------
// ex 20

// const triangulo1 = [10, 15];
// const triangulo2 = [13.1, 9.25];

// areaTriangulo = (array) => {
// const multi = array.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
// let area = multi / 2;

// console.log(area.toFixed(2));
// };
// areaTriangulo(triangulo1);
// areaTriangulo(triangulo2);

// ------------//-----------------
// ex 21

// let array1 = [10, 5, 35, 65];
// let array2 = [5, -15, 50, 3];

// menorValor = (array) => {
//   const menor = Math.min(...array);
//   console.log(menor);
// };
// menorValor(array1);
// menorValor(array2);

// ------------//-----------------
// ex 22

// randomNum = (palpite) => {
//   let ramdom = (Math.random() * (10 - 1) + 1).toFixed(0);
//   if(palpite == ramdom) {
//     console.log('Parabéns, você acertou o número secreto!');
//   }else{
//     console.log('Tente novamente, o número secreto é: ' + ramdom);
//   }
// };

// randomNum(5);

// ------------//-----------------
// ex 23

// let frase = "sou uma frase";
// let frase2 = "Me divirto aprendendo a programar";

// contaPalavras = (texto) => {
// let count = 0;
// let words = texto.split(" ");
// for (let i = 0; i < words.length; i++) {
//   count++;
// }
// console.log(count);
// }

// contaPalavras(frase);
// contaPalavras(frase2);

// ------------//-----------------
// ex 24

// const frase = "A sorte favorece os audazes";
// const frase2 = "Conhece-te a ti mesmo";

// contaLetras = (texto, letra) => {
//   let counter = 0;
//   for (let i = 0; i < texto.length; i++) {
//     if (texto[i] == letra) {
//       counter++;
//     }
//   }
//   console.log(counter);
// };
// contaLetras(frase, "r");
// contaLetras(frase2, "c");

// ------------//-----------------
// ex 25

// let palavras = ["programação", "mobile", "profissional"];
// let palavras2 = ["janeiro", "fevereiro", "março", "abril"];

// verificador = (letras, array) => {
//   let procurar = array.filter((item) => item.includes(letras));
//   console.log(procurar);
// };
// verificador("pro", palavras);
// verificador("iro", palavras2);

// ------------//-----------------
// ex 26

// let palavra = "fundamentos";
// let palavra2 = "cod3r";

// removeVogais = (frase) => {
//   let vogais = frase.replace(/[aeiou]/g, "");
//   console.log(vogais);
// };

// removeVogais(palavra);
// removeVogais(palavra2);

// ------------//-----------------
// ex 27

// let objeto = {a: 1, b: 2, c: 3};

// invertObj = (obj) => {
// let objeto2 = {}
// Object.entries(obj).forEach(([key, value]) =>{
//     objeto2[value] = key;
// });
//     console.log(objeto2);
// }
// invertObj(objeto);

// ------------//-----------------
// ex 28

// let arr = [38, 2, 365, 10, 125, 11];
// let arr2 = [5, 9, 1, 125, 11];

// arrLength = (array, num) => {
//   let arrStr = array.map((x) => x.toString());
//   let arrVazio = [];
//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i].length === num) {
//       arrVazio.push(arrStr[i]);
//     }
//   }
//   console.log(arrVazio);
// };
// arrLength(arr, 2);
// arrLength(arr2, 1);

// ------------//-----------------
// ex 29

// let num = [12, 16, 1, 5];
// let num2= [8, 4, 5 ,6];
// let num3 = [2, 1, 4, 3];

// segundoMaior = (array) => {
//   array.sort(function (a, b) {
//     return a - b;
//   });
//   let penultimo = array[array.length - 2];
//   console.log(penultimo);
// };
// segundoMaior(num);
// segundoMaior(num2);
// segundoMaior(num3);

// ------------//-----------------
// ex 30

let estudantes = [
  { nome: "joao", nota: [8, 7.6, 8.9, 6] },
  { nome: "Mariana", nota: [9, 6.6, 7.9, 8] },
  { nome: "Carla", nota: [7, 7, 8, 9] },
];


let estudantes2 = [
  { nome: "pedro", nota: [9, 7.6, 8.9, 6] },
  { nome: "Maria", nota: [9, 6.6, 8.1, 8] },
  { nome: "Carlos", nota: [7, 10, 8, 9] },
];

VerificaOMelhor = (obj) => {
  let maiorMedia = 0;
  let melhorAluno = "";

  for (let i = 0; i < obj.length; i++) {
    let notas = obj[i].nota;
    let soma = notas.reduce((acc, val) => acc + val, 0);
    let media = soma / obj[i].nota.length;
    //   console.log(obj[i].nome, media);

    if (media > maiorMedia) {
      maiorMedia = media;
      melhorAluno = obj[i].nome;
    }
  }

  console.log(melhorAluno, maiorMedia);
};

VerificaOMelhor(estudantes);
VerificaOMelhor(estudantes2);
