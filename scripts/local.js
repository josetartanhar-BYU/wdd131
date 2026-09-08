const temperatura = 8;
const velocidadeVento = 10;

function calcularSensacaoTermica(temperatura, velocidadevento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(velocidadevento, 0.16) + 0.3965 * temperatura * Math.pow(velocidadevento, 0.16);
}

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
    document.querySelector("#sensacao").textContent = `${resultado.toFixed(1)} °C`;

} else {
    document.querySelector("#sensacao").textContent = "N/A";
}

document.querySelector("#anoatual").textContent = new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent = `Última Modificação: ${document.lastModified}`;


