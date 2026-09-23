const formulario = document.querySelector("#form-orcamento");
const mensagem = document.querySelector("#mensagem-orcamento");
const dataEvento = document.querySelector("#data-evento");
const grupoServicos = document.querySelector("#grupo-servicos");


// Define a data mínima como a data atual
const hoje = new Date();
const dataMinima = hoje.toISOString().split("T")[0];

dataEvento.min = dataMinima;


// Remove o destaque de erro quando um serviço for selecionado
const checkboxes = document.querySelectorAll('input[name="servicos"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        const selecionados = document.querySelectorAll(
            'input[name="servicos"]:checked'
        );

        if (selecionados.length > 0) {
            grupoServicos.classList.remove("invalido");
        }
    });
});


// Envio do formulário
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;

    // Captura somente os serviços marcados
    const servicosSelecionados = Array.from(
        document.querySelectorAll('input[name="servicos"]:checked')
    ).map(function(item) {
        return item.value;
    });


    // Verifica se pelo menos um serviço foi selecionado
    if (servicosSelecionados.length === 0) {
        grupoServicos.classList.add("invalido");

        mensagem.textContent =
            "Selecione pelo menos um produto ou serviço desejado.";

        return;
    }

    grupoServicos.classList.remove("invalido");


    // Cria o objeto com os dados do orçamento
    const solicitacao = {
        nome: nome,
        telefone: document.querySelector("#telefone").value,
        tipoEvento: document.querySelector("#tipo-evento").value,
        dataEvento: document.querySelector("#data-evento").value,
        convidados: document.querySelector("#convidados").value,
        servicos: servicosSelecionados,
        detalhes: document.querySelector("#detalhes").value
    };


    // Salva os dados no navegador
    localStorage.setItem(
        "ultimaSolicitacao",
        JSON.stringify(solicitacao)
    );


    // Exibe a confirmação
    mensagem.textContent =
        `${nome}, sua solicitação foi registrada com sucesso!`;


    // Limpa os campos
    formulario.reset();
});