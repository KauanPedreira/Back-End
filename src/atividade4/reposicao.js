// =============================================================================
// Exercícios de JavaScript: Objetos e JSON
// Aluno: Kauan Pedreira
// RA: 2565900
// =============================================================================


console.log("### Início dos Exercícios ###\n");

// --- Exercício 1: Crie um objeto chamado `aluno` ---
console.log("--- Exercício 1 ---");
const aluno = {
  nome: "Carlos Silva",
  idade: 22,
  curso: "Análise e Desenvolvimento de Sistemas"
};
console.log("Objeto aluno criado:", aluno);


// --- Exercício 2: Adicione uma nova propriedade chamada `matriculado` ---
console.log("\n--- Exercício 2 ---");
aluno.matriculado = true;
console.log("Propriedade 'matriculado' adicionada:", aluno);


// --- Exercício 3: Altere o valor da propriedade `curso` ---
console.log("\n--- Exercício 3 ---");
aluno.curso = "Engenharia";
console.log("Propriedade 'curso' alterada:", aluno);


// --- Exercício 4: Remova a propriedade `idade` ---
console.log("\n--- Exercício 4 ---");
delete aluno.idade;
console.log("Propriedade 'idade' removida:", aluno);


// --- Exercício 5: Acesse o valor da propriedade `nome` e armazene em uma variável ---
console.log("\n--- Exercício 5 ---");
const nomeAluno = aluno.nome;
console.log("Valor da variável nomeAluno:", nomeAluno);


// --- Exercício 6: Crie um array chamada `alunos` ---
console.log("\n--- Exercício 6 ---");
const alunos = [
  { nome: "Ana", nota: 9.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carla", nota: 7.5 }
];
console.log("Array de alunos:", alunos);


// --- Exercício 7: Usando `map`, crie um novo array com apenas os nomes dos alunos ---
console.log("\n--- Exercício 7 ---");
const nomesDosAlunos = alunos.map(aluno => aluno.nome);
console.log("Array com nomes dos alunos (map):", nomesDosAlunos);


// --- Exercício 8: Use `filter` para retornar os alunos com nota maior ou igual a 7 ---
console.log("\n--- Exercício 8 ---");
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Alunos com nota >= 7 (filter):", alunosAprovados);


// --- Exercício 9: Converta o objeto `aluno` para uma string JSON ---
console.log("\n--- Exercício 9 ---");
const alunoJSON = JSON.stringify(aluno);
console.log("Objeto aluno em formato JSON:", alunoJSON);
console.log("Tipo da variável:", typeof alunoJSON);


// --- Exercício 10: Converta a string JSON anterior de volta para objeto ---
console.log("\n--- Exercício 10 ---");
const objetoAluno = JSON.parse(alunoJSON);
console.log("String JSON convertida para objeto:", objetoAluno);
console.log("Tipo da variável:", typeof objetoAluno);


// --- Exercício 11: Crie um objeto `livro` com um objeto aninhado `editora` ---
console.log("\n--- Exercício 11 ---");
const livro = {
  titulo: "JavaScript: O Guia Definitivo",
  autor: "David Flanagan",
  anoPublicacao: 2012,
  editora: {
    nome: "O'Reilly Media",
    cidade: "Sebastopol"
  }
};
console.log("Objeto livro com editora aninhada:", livro);


// --- Exercício 12: Acesse o nome da editora do objeto `livro` ---
console.log("\n--- Exercício 12 ---");
const nomeEditora = livro.editora.nome;
console.log("Nome da editora:", nomeEditora);


// --- Exercício 13: Faça uma função chamada `listarPropriedades(obj)` ---
console.log("\n--- Exercício 13 ---");
function listarPropriedades(obj) {
  return Object.keys(obj);
}
console.log("Propriedades do objeto livro:", listarPropriedades(livro));


// --- Exercício 14: Crie uma função chamada `atualizarObjeto(obj, chave, valor)` ---
console.log("\n--- Exercício 14 ---");
function atualizarObjeto(obj, chave, valor) {
  obj[chave] = valor;
  return obj;
}
console.log("Livro antes da atualização:", livro);
atualizarObjeto(livro, 'anoPublicacao', 2020);
console.log("Livro depois de atualizar 'anoPublicacao':", livro);


// --- Exercício 15: Escreva uma função chamada `removerPropriedade(obj, chave)` ---
console.log("\n--- Exercício 15 ---");
function removerPropriedade(obj, chave) {
  return delete obj[chave];
}
console.log("Livro antes da remoção:", livro);
removerPropriedade(livro, 'cidade');
removerPropriedade(livro.editora, 'cidade');
console.log("Livro depois de remover 'cidade' da editora:", livro);


console.log("\n### Fim dos Exercícios ###");
