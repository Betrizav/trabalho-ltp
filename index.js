let cadastrar = function(){
    let inputDescricao = document.getElementById("descricao");
    let descricao = inputDescricao.value;

    let inputCor = document.getElementById("cor");
    let cor = inputCor.value;

    
    let inputTipoFlor = document.getElementById("tipoFlor");
    let tipoFlor = inputTipoFlor.value;


    let inputData = document.getElementById("data");
    let data = inputData.value;


    let inputPreco = document.getElementById("preco");
    let preco = inputPreco.value;

    let flor = new Flor (descricao , cor, tipoFlor, data, preco);


    let linhaTabela = document.createElement('tr');
    let tabela = document.getElementById("tabela");

    tabela.appendChild(linhaTabela);
    

    let tdDescricao = document.createElement('td');
    let textDescricao = document.createTextNode(flor.descricao);

    tdDescricao.appendChild(textDescricao);
    linhaTabela.appendChild(tdDescricao);


    let tdCor = document.createElement('td');
    let textCor = document.createTextNode(flor.cor);

    tdCor.appendChild(textCor);
    linhaTabela.appendChild(tdCor);
    


    let tdTipoFlor = document.createElement('td');
    let textTipoFlor = document.createTextNode(flor.tipoFlor);

    tdTipoFlor.appendChild(textTipoFlor);
    linhaTabela.appendChild(tdTipoFlor);
      

   let tdData = document.createElement('td');
   let textData = document.createTextNode(flor.data);

   tdData.appendChild(textData);
   linhaTabela.appendChild(tdData);


   let tdPreco = document.createElement('td');
   let textPreco = document.createTextNode(flor.preco);

   tdPreco.appendChild(textPreco);
   linhaTabela.appendChild(tdPreco);


}


    



