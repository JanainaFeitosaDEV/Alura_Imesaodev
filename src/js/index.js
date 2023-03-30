function adicionarFilme() {
    const imagem = document.querySelector("#filme").value;
    const trailer = document.querySelector("input[type='text']:nth-of-type(2)").value;
    const listaFilmes = document.querySelector("#listaFilmes");
  
   var novoFilme = document.createElement("a");
    novoFilme.href = trailer;
    novoFilme.target = "_blank";
    
    const novaImagem = document.createElement("img");
    novaImagem.src = imagem;
  
    novoFilme.appendChild(novaImagem);
    listaFilmes.appendChild(novoFilme);
    
    document.querySelector("#filme").value = "";
    document.querySelector("input[type='text']:nth-of-type(2)").value = "";
  }
  