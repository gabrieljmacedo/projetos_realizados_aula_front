console.log("Olá, eu sou o log");

//viaveis NÃO SÃO TIPADAS

//modo antigo
var user = "Gabriel M.";
console.log(user);

//metodo de usar
let email = "gabrieljm58@hotmail.com";
console.log(email);

let idade = 24;
console.log(idade);

let login = false;
console.log(login);

// ver o tipo que foi atribuido
console.log(typeof user, user);
console.log(typeof email, email);
console.log(typeof idade, idade);
console.log(typeof login, login);

// alterando dados do login
login = 123456;
console.log(typeof login, login);

// declaracao sem valor
let color;
console.log(typeof color);

// declarando algo que nunca sofrerá alteração
const nome = "Gabriel Eu mesmo";
console.log(typeof nome, nome);

// evitar esse tipo de concat no JS
console.log("Usuário" + user + "Logado" + login);

// template string
// iniciar e teminar com crase `` as concatenacoes `escrever o que quiser`
// chamar as variaveis ${nome da variavel}

// concatenacao com quebra de linha 
console.log(`Usuário: ${user} 
email: ${email}`);

let primeiroNumero = '30';
let segundoNumero = 30;

console.log(`Soma dos valores: ${primeiroNumero + segundoNumero}`);

console.log(primeiroNumero == segundoNumero);

//comparar em JS
console.log(primeiroNumero === segundoNumero);

// arrays
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós'];
console.log(pessoas);
console.table(pessoas);

//insere um valor em ultimo no indice do array
pessoas.push('Eu mesmo');

console.log(pessoas);

//pop retira o ultimo dado do indice do array
pessoas.pop();
console.log(pessoas);

// unshift insere no primeiro indice do array 
pessoas.unshift('Eu mesmo');
console.table(pessoas);

// shift retira do valor primeiro indice do array 
pessoas.shift('Eu mesmo');
console.table(pessoas);

// retirar indices do meio do array
pessoas.splice(2, 2);
console.table(pessoas);

//inserir indices no meio do array
pessoas.splice(2, 0, 'Ele', 'Nós');
console.table(pessoas);