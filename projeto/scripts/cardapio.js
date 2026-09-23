
const itensCardapio = [
    {
        nome: "Coxinha com Catupiry",
        categoria: "Salgados",
        descricao: "Coxinha preparada com massa macia e recheio saboroso.",
        imagem: "imagens/coxinha.webp"
    },
    {
        nome: "Pães Caseiros",
        categoria: "Pães e Massas",
        descricao: "Pães caseiros preparados para acompanhar seu café ou chá da tarde.",
        imagem: "imagens/pao.webp"
    },
    {
        nome: "Pizza Caseira",
        categoria: "Pães e Massas",
        descricao: "Pizza caseira preparada com massa artesanal e ingredientes selecionados.",
        imagem: "imagens/pizza.webp"
    },
    {
        nome: "Bolo de Chocolate com Mousse de Maracujá",
        categoria: "Doces e Bolos",
        descricao: "Bolo de chocolate com mousse de maracujá.",
        imagem: "imagens/bolo-maracuja.webp"
    },
    {
        nome: "Bolo Decorado",
        categoria: "Doces e Bolos",
        descricao: "Bolo decorado para deixar seus momentos especiais ainda mais saborosos.",
        imagem: "imagens/bolo-decorado.webp"
    },
    {
        nome: "Sobremesa de Chocolate",
        categoria: "Doces e Bolos",
        descricao: "Sobremesa individual de chocolate, finalizada com granulado e uva.",
        imagem: "imagens/sobremesa-chocolate.webp"
    },
    {
        nome: "Espaguete à Bolonhesa",
        categoria: "Pães e Massas",
        descricao: "Espaguete ao molho bolonhesa, finalizado com queijo ralado e ervas.",
        imagem: "imagens/espaguete-bolonhesa.webp"
    },
    {
        nome: "Lasanha à Bolonhesa",
        categoria: "Pães e Massas",
        descricao: "Lasanha preparada com molho bolonhesa e queijo gratinado.",
        imagem: "imagens/lasanha.webp"
    },
    {
        nome: "Prato Executivo",
        categoria: "Almoços",
        descricao: "Prato com arroz, feijão, frango grelhado, salada e batata palha.",
        imagem: "imagens/prato-executivo.webp"
    }
];

const cardapio = document.querySelector("#cardapio");
const botoesFiltro = document.querySelectorAll(".filtros button");

function exibirProdutos(produtos) {
    cardapio.innerHTML = "";

    produtos.forEach(function(item) {
        const card = document.createElement("div");

        card.classList.add("cardapio-card");

        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
            <h2>${item.nome}</h2>
            <p class="categoria">${item.categoria}</p>
            <p>${item.descricao}</p>
        `;

        cardapio.append(card);
    });
}

botoesFiltro.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const categoria = botao.dataset.categoria;

        botoesFiltro.forEach(function(item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        if (categoria === "Todos") {

            exibirProdutos(itensCardapio);

        } else {

            const produtosFiltrados = itensCardapio.filter(function(item) {
                return item.categoria === categoria;
            });

            exibirProdutos(produtosFiltrados);
        }
    });
});

exibirProdutos(itensCardapio);

