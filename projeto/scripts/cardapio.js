const itensCardapio = [
    {
        nome: "Coxinha com Catupiry",
        categoria: "Salgados",
        descricao: "Coxinha preparada com massa macia e recheio saboroso.",
        imagem: "imagens/coxinha.webp"
    },

    {

        nome: "Pães Caseiros",
        categoria: "Massas e Almoços",
        descricao: "Pães caseiros preparados para acompanhar seu café ou chá da tarde.",
        imagem: "imagens/pao.webp"

    },

    {
        nome: "Pizza Caseira",
        categoria: "Pães e Massas",
        descricao: "Pizza caseira preparada com massa artesanal e ingredientes selecionados.",
        imagem: "imagens/pizza.webp"
    }
];

const cardapio = document.querySelector("#cardapio");

itensCardapio.forEach(function(item) {
    const card = document.createElement("div");
    card.classList.add("cardapio-card");

    card.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
        <h2>${item.nome}</h2>
        <p>${item.categoria}</p>
        <p>${item.descricao}</p>
           
    `;
    cardapio.append(card);
});