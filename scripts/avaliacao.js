let contador = Number(localStorage.getItem("contadorAvaliacoes"));
contador++;

localStorage.setItem("contadorAvaliacoes", contador);

const contadorElemento = document.querySelector("#contador-avaliacoes");

contadorElemento.textContent = `Você concluiu ${contador} avaliações.`

