document.getElementById('mostar_descricao').addEventListener('click', function() {
    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim().replace(/\D/g, ''); // Remove caracteres não numéricos
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cardCVV = document.getElementById('cardCVV').value.trim();

    // Validação do CVV (3 dígitos)
    if (cardCVV.length !== 3) {
        alert("O número do cartão deve ter 3 dígitos.");
        return;
    }

    // Validação do formato da validade
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
    if (!expiryRegex.test(expiryDate)) {
        alert("Formato da validade deve ser MM/AA");
        return;
    }

    // Validação do número do cartão (16 dígitos)
    if (cardNumber.length !== 16) {
        alert("O número do cartão deve ter 16 dígitos.");
        return;
    }

    // Função para formatar o número do cartão com espaços
    function formatCardNumber(cardNumber) {
        return cardNumber.replace(/(.{4})/g, '$1 ').trim(); // Adiciona um espaço a cada 4 dígitos
    }

    // Atualizar o cartão com os dados digitados
    document.getElementById('outputCardName').innerText = cardName || "Nome do Titular";
    document.getElementById('outputCardNumber').innerText = formatCardNumber(cardNumber) || "0000 0000 0000 0000";
    document.getElementById('outputExpiryDate').innerText = `Validade: ${expiryDate}` || " MM/YY";
    document.getElementById('outputCVV').innerText = `CVV: ${cardCVV}` || "CVV";

    // Mostrar o contêiner do cartão
    document.getElementById('outputContainer').style.display = 'block';
});

// Atualização em tempo real dos dados do cartão
document.getElementById('cardName').addEventListener('input', updateCard);
document.getElementById('cardNumber').addEventListener('input', updateCard);
document.getElementById('expiryDate').addEventListener('input', updateCard);
document.getElementById('cardCVV').addEventListener('input', updateCard);

function updateCard() {
    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim().replace(/\D/g, ''); // Remove caracteres não numéricos
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cardCVV = document.getElementById('cardCVV').value.trim();

    document.getElementById('outputCardName').innerText = cardName || "Nome do Titular";
    document.getElementById('outputCardNumber').innerText = formatCardNumber(cardNumber) || "0000 0000 0000 0000";
    document.getElementById('outputExpiryDate').innerText = `Validade: ${expiryDate}` || " MM/YY";
    document.getElementById('outputCVV').innerText = `CVV: ${cardCVV}` || "CVV";
}

function formatCardNumber(cardNumber) {
    return cardNumber.replace(/(.{4})/g, '$1 ').trim();
}
