const cartoes = document.querySelector("#cartoes");

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
 {
    nomeDoTemplo: "Campinas Brazil",
    localizacao: "Campinas, São Paulo, Brasil",
    consagracao: "2002, 17 de maio",
    area: 49100,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/8540649d4237393e9b6ae327ab4aac3992f62bd9/full/!1200,/0/default"
},
{
    nomeDoTemplo: "Curitiba Brazil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/7363ce783cd84562007af4653bd691e69375e464/full/!1200,/0/default"
},
{
    nomeDoTemplo: "Recife Brazil",
    localizacao: "Recife, Pernambuco, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 37200,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/!1200,/0/default"
}
];

function exibirTemplos(listaTemplos){

    listaTemplos.forEach(templo => {

    const cartao = document.createElement("section");

    const titulo = document.createElement("h2");
    titulo.textContent = templo.nomeDoTemplo;

    const local = document.createElement("p");
    local.textContent = templo.localizacao;

    const consagracao = document.createElement("p");
    consagracao.textContent = templo.consagracao;

    const area = document.createElement("p");
    area.textContent = `Área: ${templo.area} pés²`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.nomeDoTemplo;
    imagem.loading = "lazy";

    cartao.appendChild(titulo);
    cartao.appendChild(local);
    cartao.appendChild(consagracao);
    cartao.appendChild(area);
    cartao.appendChild(imagem);
    cartoes.appendChild(cartao);
    
});
}
exibirTemplos(templos);
 
const paginainicial = document.querySelector("#pagina-inicial");
const antigo = document.querySelector("#antigo");
const novo = document.querySelector("#novo");
const grande = document.querySelector("#grande");
const pequeno = document.querySelector("#pequeno");
const tituloPagina = document.querySelector("h1");

antigo.addEventListener("click", () => {
    const templosAntigos = templos.filter(templo => {
    return parseInt(templo.consagracao) < 1900;

    });

    cartoes.innerHTML = "";

    exibirTemplos(templosAntigos);

    tituloPagina.textContent = "Antigo";

});

novo.addEventListener("click", () => {

    const templosNovos = templos.filter(templo => {
        return parseInt(templo.consagracao) > 2000;
    });

    cartoes.innerHTML = "";
    exibirTemplos(templosNovos)

    tituloPagina.textContent = "Novo"
});

grande.addEventListener("click", () => {
    const templosGrandes = templos.filter(templo => {
        return templo.area > 90000;
    });

    cartoes.innerHTML = "";
    exibirTemplos(templosGrandes);

    tituloPagina.textContent = "Grande"
});

pequeno.addEventListener("click", () => {
    const templosPequenos = templos.filter(templo =>{
        return templo.area < 10000;
    });

    cartoes.innerHTML = "";
    exibirTemplos(templosPequenos)

    tituloPagina.textContent = "Pequeno"
});

paginainicial.addEventListener("click", () =>{

    cartoes.innerHTML = "";
    exibirTemplos(templos);

    tituloPagina.textContent = "Página Inicial"
});

const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");


menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");

    if(menu.classList.contains("open")) {
        menuButton.textContent = "❌";
        menuButton.setAttribute("aria-label", "Fechar menu de navegação")
    } else {
        menuButton.textContent = " ☰ ";
        menuButton.setAttribute("aria-label", "Abrir menu de navegação")
    }

    
});
