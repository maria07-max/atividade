function calcular() {
    const totalComida = parseFloat(document.getElementById('totalComida').value);
    const tempo = parseInt(document.getElementById('tempo').value);

    if (isNaN(totalComida) || isNaN(tempo) || totalComida <= 0 || tempo <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Calcula a quantidade de comida retirada a cada meia hora
    const intervalo = 30; // minutos
    const retiradaPorIntervalo = totalComida / (tempo / intervalo);

    document.getElementById('resultado').innerText = `Quantidade de comida retirada a cada meia hora: ${retiradaPorIntervalo.toFixed(2)} kg`;
}
