// Função para inicializar os produtos no localStorage
function inicializarProdutos() {
    const produtos = [
        { id: 'produto1', nome: 'Controle MUITO FODA', preco: 'R$ 990', precoAntigo: 'R$ 1100', imagem: '/indexPRODUTOS/PageProduto/Controlle/image 57.png' },
        { id: 'produto2', nome: 'NOtBOOK MUITO FODA', preco: 'R$ 990', precoAntigo: 'R$ 1100', imagem: '/indexPRODUTOS/PageProduto/notbokk/Captura_de_tela_2024-10-30_152746-removebg-preview.png' },
        { id: 'produto3', nome: 'Munitor GAMER MUITO FODA', preco: 'R$ 990', precoAntigo: 'R$ 1100', imagem: '/indexPRODUTOS/PageProduto/Munitor/Captura_de_tela_2024-10-30_160445-removebg-preview.png' },
        { id: 'produto4', nome: 'GOG GLASS MUITO FODA', preco: 'R$ 990', precoAntigo: 'R$ 1100', imagem: '/indexPRODUTOS/PageProduto/GOG GLASS/vegeta.png' }
    ];

    if (!localStorage.getItem('produtos')) {
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }
}

// Função para adicionar um novo produto
function adicionarProduto() {
    const nome = prompt("Digite o nome do produto:");
    let preco = prompt("Digite o preço do produto:");
    let precoAntigo = prompt("Digite o preço antigo do produto:");
    const imagem = prompt("Digite o URL da imagem do produto:");

    // Adiciona o prefixo "R$" se não estiver presente
    preco = preco.startsWith('R$') ? preco : `R$ ${preco}`;
    precoAntigo = precoAntigo.startsWith('R$') ? precoAntigo : `R$ ${precoAntigo}`;

    const novoProduto = {
        id: `produto${Date.now()}`,  // Usamos o timestamp para gerar um ID único
        nome: nome,
        preco: preco,
        precoAntigo: precoAntigo,
        imagem: imagem
    };

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Atualiza a página para refletir a adição
    atualizarPaginaProdutos();
}

// Função para atualizar a exibição dos produtos
function atualizarPaginaProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const sectionProdutos = document.querySelector('.selecao_produtos');
    sectionProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('descrição_Prudu');
        produtoDiv.id = produto.id;

        produtoDiv.innerHTML = `
            <div class="conteiner_produtos">
                <a class="clicar_produtos" href="/indexPRODUTOS/PagePruduto${produto.id}.html">
                    <img class="img_produtos" src="${produto.imagem}" alt="${produto.nome}">
                </a>
            </div>
            <h4>${produto.nome}</h4>
            <strong class="preço">${produto.preco} <span>${produto.precoAntigo}</span></strong>
            <div class="acoes_produto">
                <button class="editar" onclick="editarProduto('${produto.id}')">Editar</button>
                <button class="excluir" onclick="excluirProduto('${produto.id}')">Excluir</button>
            </div>
        `;

        sectionProdutos.appendChild(produtoDiv);
    });
}

// Função para excluir um produto
function excluirProduto(id) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Confirmação antes de excluir o produto
    const confirmacao = confirm("Tem certeza que deseja excluir este produto?");

    if (confirmacao) {
        // Filtra os produtos para remover o que tem o id igual
        produtos = produtos.filter(produto => produto.id !== id);

        // Atualiza o localStorage com os produtos restantes
        localStorage.setItem('produtos', JSON.stringify(produtos));

        // Atualiza a exibição dos produtos na página
        atualizarPaginaProdutos();

        // Exibe uma mensagem de sucesso após a exclusão
        alert("Produto excluído com sucesso!");
    } else {
        // Caso o usuário tenha cancelado, nada acontece
        console.log("Exclusão cancelada.");
    }
}

// Função para editar um produto
function editarProduto(id) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produto = produtos.find(prod => prod.id === id);

    if (produto) {
        let novoNome = prompt("Digite o novo nome do produto:", produto.nome);
        let novoPreco = prompt("Digite o novo preço do produto:", produto.preco);
        let novoPrecoAntigo = prompt("Digite o novo preço antigo do produto:", produto.precoAntigo);
        let novaImagem = prompt("Digite o novo URL da imagem do produto:", produto.imagem);

        // Adiciona o prefixo "R$" se não estiver presente
        novoPreco = novoPreco.startsWith('R$') ? novoPreco : `R$ ${novoPreco}`;
        novoPrecoAntigo = novoPrecoAntigo.startsWith('R$') ? novoPrecoAntigo : `R$ ${novoPrecoAntigo}`;

        produto.nome = novoNome;
        produto.preco = novoPreco;
        produto.precoAntigo = novoPrecoAntigo;
        produto.imagem = novaImagem;

        // Atualiza o produto no localStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));

        // Atualiza a página
        atualizarPaginaProdutos();
}
}

// Inicializa os produtos e exibe na página
inicializarProdutos();
atualizarPaginaProdutos();
