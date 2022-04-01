// recuperando o tbody - preciso dele para criar a linha e as colunas que receberao as info
const tbody = document.querySelector("tbody");
// console.log(tbody);

// cancelar o envio do form - pegar o evento submit (ESCUTADOR de eventos)
// - quando o evento for disparado, ele cancela o envio e executa a função que será criada
// - (pegar os dados digitados e exibir em tela)

document.querySelector("form").addEventListener("submit", function (event) {
  // cancelar o evento
  event.preventDefault();

  // recuperar as info que foram digitadas
  const campos = [
    document.querySelector("#usuario"),
    document.querySelector("#email"),
    document.querySelector("#dataCadastro"),
    document.querySelector("#tipoConta"),
  ];

  // console.log(campos);

  // criar tr
  const tr = document.createElement("tr");

  // fazendo um foreach para percorrer o array e para cada uma das ocorrencias ele cria uma TD

  campos.forEach((campo) => {
    //criar uma td
    const td = document.createElement("td");

    // colocar a informacao digitada na td
    td.textContent = campo.value;

    // colocar a td na tr
    tr.appendChild(td);
  });

  //adicionar a linha criada e suas tds dentro do tbody
  tbody.appendChild(tr);

  // limpar o formulario
  this.reset();
});
