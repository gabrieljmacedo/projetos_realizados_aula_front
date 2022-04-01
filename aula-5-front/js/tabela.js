// DOM - DOCUMENT OBJECT MODEL
// MANIPULA HTML E CSS
// PEGA QUALQUER CONTEÚDO DA PÁGINA E TRAZ PARA O JS 
// INSERIR TAGS, CONTEÚDOS E CLASSES CSS
// EXCLUIR CONTEÚDO
// LISTAR CONTEÚDO 
// ALTERAR CONTEÚDO DENTRO DA PÁGINA 
// PEGAR OS ELEMENTOS - RETORNA TODAS AS INFORMAÇÕES DO ELEMENTOS
// RETORNA TODOS OS FILHOS DO ELEMENTO - RETORNA TODAS AS PROPRIEDADES DO ELEMENTO

// pegando elementos pela tag 
const getTag1 = document.getElementsByTagName('td');
console.log(getTag1);
console.log(getTag1[0].textContent);
console.log(getTag1[4].textContent);
getTag1[4].textContent = 'R2D2';

// querySelector pega o primeiro que encontra 
const getTag2 = document.querySelectorAll('th');
console.log(getTag2);

// pegando pela class 
const getClass1 = document.getElementsByClassName('personages');
console.log(getClass1);

const getClass2 = document.querySelectorAll('.name-personage');
console.log(getClass2);

// pegar pelo id 
const getId1 = document.getElementById('starWars');
console.log(getId1);

const getId2 = document.querySelector("#starWars");
console.log(getId2);