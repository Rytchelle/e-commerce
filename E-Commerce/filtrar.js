fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then((json) => {
        console.log(json);
        const ul = document.getElementById('listaProdutos');
        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <a href="https://meusite.com.br/produto/${item.id}">
                <img width="50"
                    src="${item.image}">
                <span class="item-name">${item.title}</span>
            </a>
            `;
            ul.appendChild(li);
        })
    })

function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtValue,
        count = 0

    //PEGAR OS ELEMENTOS HTML
    input = document.getElementById('inputBusca');
    ul = document.getElementById('listaProdutos');

    //FILTRO
    filter = input.value.toUpperCase();

    //PEGAR TODAS AS LI's DA LISTA
    li = ul.getElementsByTagName("li");

    //PERCORRER TODOS OS LI'S
    for (i = 0; i < li.length; i++) {
        //PEGAR A TAG A DO ELEMENTO PERCORRIDO
        a = li[i].getElementsByTagName("a")[0];
        //PEGAR O TEXTO DENTRO DO NOSSA TAG A
        txtValue = a.textContent || a.innerText;
        //VERIFICAR SE O QUE O USUARIO DIGITOU BATE COM O TEXTO DA TAG A
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //VALOR BATEU
            li[i].style.display = "";
            //INCREMENTAR O CONTADOR
            count++
            //PEGAR A TAG SPAN DO ITEM
            span = li[i].querySelector(".item-name");
            //SE EXISTIR
            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<mark>" + match + "</mark>";
                })
            }
        } else {
            //NÃO MOSTRA O ITEM DA LISTA
            li[i].style.display = "none";
        }
    }
    
	//VERIFICANDO SE TEM ITENS NA LISTA
     if(filter ===""){ 
	 ul.style.display = "none";
	 }else{ 
	 ul.style.display = "block";
	 }

     

}