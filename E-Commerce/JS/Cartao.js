    
    
    
    document.getElementById('mostar_descricao').addEventListener('click' , function(Mostardescricao) {
   

        
        const cardName = document.getElementById('cardName').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.trim().replace(/\D/g, ''); // Remove caracteres não numéricos
        const expiryDate = document.getElementById('expiryDate').value.trim();
        const cardCVV = document.getElementById('cardCVV').value.trim(); // Obtenha o valor do CVV

       
    


        const inputFields = [document.getElementById('cardName'), document.getElementById('cardNumber'), document.getElementById('expiryDate'), document.getElementById('cardCVV')];

inputFields.forEach(field => {
    field.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            Mostardescricao(); // Chama a função para mostrar os dados do cartão
        }
    });
});
    
    
    if (cardCVV.length !== 3) {
        alert("O número do cartão deve ter 3 dígitos.");
        return;
    }
    
    
    // Validação de formato da validade
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
    if (!expiryRegex.test(expiryDate)) {
        alert("Formato da validade deve ser MM/AA");
        return;
    }

    // Validação do número do cartão
    if (cardNumber.length !== 16) {
        alert("O número do cartão deve ter 16 dígitos.");
        return;
    }

    // Função para formatar o número do cartão com espaços
    function formatCardNumber(cardNumber) {
        return cardNumber.replace(/(.{4})/g, '$1 ').trim(); // Adiciona um espaço a cada 4 dígitos
    }

    // Exibir os dados no cartão
    
    document.getElementById('outputCardName').innerText = cardName;
    document.getElementById('outputCardNumber').innerText = formatCardNumber(cardNumber); // Formata o número com espaços
    document.getElementById('outputExpiryDate').innerText = `Validade: ${expiryDate}`;
    document.getElementById('outputCVV').innerText = `CVV: ${cardCVV}`; // Exibir o CVV

    // Mostrar o contêiner do cartão
    document.getElementById('outputContainer').style.display = 'block';
});

// Formatação da validade enquanto o usuário digita
document.getElementById('expiryDate').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove não dígitos
    if (value.length > 4) value = value.slice(0, 4); // Limita a 4 dígitos

    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2); // Adiciona a barra
    }

    e.target.value = value; // Atualiza o valor do campo
});

// Formatação do número do cartão enquanto o usuário digita
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove não dígitos
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Adiciona um espaço a cada 4 dígitos
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue; // Atualiza o valor do campo
});


const botao = document.getElementById('mostar_descricao');
const paragrafo = document.getElementById('Descrição_p');

botao.addEventListener('click', () => {
    if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
        paragrafo.style.display = 'block'; // Mostra o parágrafo
        botao.textContent = 'Ocultar '; // Altera o texto do botão
    } else {
        paragrafo.style.display = 'none'; // Oculta o parágrafo
        botao.textContent = 'Mostrar'; // Altera o texto do botão
    }
});

const inputFields = [document.getElementById('cardName'), document.getElementById('cardNumber'), document.getElementById('expiryDate'), document.getElementById('cardCVV')];

inputFields.forEach(field => {
    field.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            Mostardescricao(); // Chama a função para mostrar os dados do cartão
        }
    });
});
