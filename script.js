let biblioteca = [];



function cadastro(nome, autor, ano) {
    var livro = {
        nome: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro)
};

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;

    cadastro(nome, autor, ano);

    let quantidade = biblioteca.length;
    document.getElementById('result').innerHTML = quantidade + " livros cadastrados."
};

function mostrarLivros() {
    for (let x of biblioteca) {
        console.log(x.nome, x.autor, x.ano)
    };
};

function apagar() {
    biblioteca.length = 0

    document.getElementById('result').innerHTML = "Cadastre um livro"
};
