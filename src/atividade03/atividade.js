// 1. Declare uma variável usando "let" com o nome "nome" e atribua a ela seu nome.
let nome = "Kauan";

// 2. Declare uma variável "idade" com valor 25 usando "var".
var idade = 25;   

// 3. Tente redeclarar a variável "idade" usando "var" com outro valor.
var idade = 30; // Isso é permitido, pois "var" permite redeclaração.

// 4. Tente redeclarar uma variável "nome" com "let" no mesmo escopo. O que acontece?
// let nome = "Kauan"; // Erro ocorreu pois "let" não permite redeclaração.

// 5. Escreva um código que exiba "Olá, mundo!" usando alert().
// alert("Olá, mundo!"); 

// 6. Crie um script que exiba seu nome no console usando console.log().
console.log("Meu nome é " + nome);

// 7. Escreva uma estrutura condicional que verifique se uma variável "nota" é maior ou igual a 7.
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}

// 8. Crie uma estrutura if/else que exiba "Par" se o número for par e "Ímpar" caso contrário.
let numero = 4;
if (numero % 2 === 0) {
    console.log("Par");
}   else {
    console.log("Ímpar");
}   

// 9. Declare duas variáveis e some seus valores, exibindo o resultado com console.log().
let a = 5;
let b = 10;
let soma = a + b;
console.log("A soma é: " + soma);

// 10. Crie uma função que receba dois números e retorne a multiplicação deles.
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log("A multiplicação é: " + multiplicar(2, 3));

// 11. Implemente uma função que use async/await e aguarde 1 segundo antes de mostrar "Pronto".
async function aguardar() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
aguardar().then(() => console.log("Pronto"));

// 12. Declare uma variável "x" com valor 10 e incremente seu valor em 5.
let x = 10;
x += 5; // x agora é 15
console.log("O valor de x é: " + x);

// 13. Escreva um código que exiba "Acesso permitido" se a idade for maior ou igual a 18.
let idadeUsuario = 20;
if (idadeUsuario >= 18) {
    console.log("Acesso permitido");
}

// 14. Utilize o operador ternário para verificar se um número é positivo ou negativo.
let numeroUsuario = -5;
let resultado = (numeroUsuario >= 0) ? "Positivo" : "Negativo";
console.log("O número é: " + resultado);

// 15. Crie um array com 3 nomes e exiba o segundo nome.
let nomes = ["Kauan", "Maria", "João"];
console.log("O segundo nome é: " + nomes[1]);

// 16. Adicione um nome ao final de um array usando push().
nomes.push("Ana");
console.log("Nomes após adicionar: " + nomes);

// 17. Remova o primeiro elemento de um array usando shift().
nomes.shift();
console.log("Nomes após remover o primeiro: " + nomes);

// 18. Declare um objeto com as propriedades nome e idade.
let pessoa = {
    nome: "Kauan",
    idade: 21
};
console.log("Nome: " + pessoa.nome + ", Idade: " + pessoa.idade);

// 19. Acesse a propriedade "idade" de um objeto e exiba no console.    
pessoa.idade = 22;
console.log("Idade: " + pessoa.idade);

// 20. Crie um loop for que conte de 1 a 5 e exiba os números.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}   

// 21. Crie uma função que exiba "Olá, [nome]" no console.
function ola(nome) {
    console.log("Olá, " + nome);
}
ola("Kauan"); 

// 22. Implemente uma Promise que resolve com "Sucesso" após 2 segundos.
let promessa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Sucesso");
    }, 2000);
});
promessa.then((resultado) => {
    console.log(resultado);
}
);
// 23. Utilize setTimeout para exibir "Tempo esgotado" após 3 segundos.
setTimeout(() => {
    console.log("Tempo esgotado");
}, 3000);

// 24. Crie um script que exiba "Bem-vindo!" somente se uma variável "logado" for true.
let logado = true;
if (logado) {
    console.log("Bem-vindo!");
}
else {
    console.log("Acesso negado!");
}

// 25. Use typeof para verificar o tipo de uma variável "nome".
let tipoNome = typeof nome;
console.log("O tipo de 'nome' é: " + tipoNome);

// 26. Crie um script que pergunte ao usuário o nome com prompt() e exiba com alert().
// let nomeUsuario = prompt("Qual é o seu nome?");
// alert("Seu nome é: " + nomeUsuario);

// 27. Use template string para exibir "Meu nome é [nome] e tenho [idade] anos".
let idadeUsuario2 = 25;
console.log(`Meu nome é ${nome} e tenho ${idadeUsuario2} anos`);

// 28. Declare uma constante com valor 100 e tente alterá-la.
const valorConstante = 100;
// valorConstante = 200; // Vai dar erro, não dá para alterar constantes.

// 29. Crie um código que simule login: se usuário for "admin" e senha "123", exiba "Acesso liberado".
let usuario = "admin";
let senha = "123";
if (usuario === "admin" && senha === "123") {
    console.log("Acesso liberado");
}
else {
    console.log("Acesso negado");
}

// 30. Crie uma função que receba idade e retorne "maior de idade" ou "menor de idade".
function verificarIdade(idade) {
    return (idade >= 18) ? "Maior de idade" : "Menor de idade";
}
console.log(verificarIdade(17));

