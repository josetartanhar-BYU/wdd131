const produtos = [
    {
        nome: "Salgado",
        descricao: "Salgados artesanais preparados com carinho.",
        imagem: "imagens/salgados.webp"
    },
    {
        nome: "Doces e Bolos",
        descricao: "Doces e bolos preparados para deixar cada comemoração ainda mais especial.",
        imagem: "imagens/doces.webp"
    },
    {
        nome: "Massas e Almoços",
        descricao: "Massas caseiras e opções de almoço preparadas com sabor de comida feita em família.",
        imagem: "imagens/massas.webp"
    }
];


// PRODUTOS
const container = document.querySelector("#produtos");

if (container) {
    produtos.forEach(function(produto) {
        const card = document.createElement("div");
        card.classList.add("produto-card");

        card.innerHTML = `
            <img src="${produto.imagem}" 
                 alt="${produto.nome}" 
                 loading="lazy">

            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>
        `;

        container.append(card);
    });
}


// ANO ATUAL
const anoAtual = document.querySelector("#anoatual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}


// ÚLTIMA MODIFICAÇÃO
const ultimaModificacao = document.querySelector("#ultimaModificacao");

if (ultimaModificacao) {
    ultimaModificacao.textContent =
        `Última modificação: ${document.lastModified}`;
}


// MENU RESPONSIVO
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.addEventListener("click", function() {
        nav.classList.toggle("open");
        menu.classList.toggle("open");
    });
}