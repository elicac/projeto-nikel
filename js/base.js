const nome = "Élica Carolaine";
let nome2 = "";
let pessoaDefault = {
    nome: "Élica Carolaine",
    idade: "24",
    trabalho: "Desenvolvedora" 
}

let nomes = ["Élica Carolaine", "Maria","João"]
let pessoas = [
    {
        nome: "Élica Carolaine",
        idade: "24",
        trabalho: "Desenvoledora"  
    },
    {
        nome: "Maria",
        idade: "23",
        trabalho: "Vendas"
    },
    {
        nome: "João",
        idade: "21",
        trabalho: "Professor"
    }
]

function alterarnome() {
    nome2 = "Rafael"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Vitor",
    idade: "18",
    trabalho: "Uber"
});

imprimirPessoas();




//mprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Gabriele ALves",
//    idade: "23",
//    trabalho: "dar trabalho" 
//})



//recebeEalteranome("Changeman");
//recebeEalteranome("Jiraya");

//alterarnome();