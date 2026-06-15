// const pessoa = { nome: 'Vinícius', idade: 18, cpf: "564254759-87"};
// { Nome: 'Sophia', idade: 16, cpf: "917562456-87"},
// { Nome: 'Ana', idade: 22, cpf: "136752987-10" };

// pessoa.nome = prompt("Digite o nome da pessoa");
// pessoa.idade = prompt("Digite o idade da pessoa");
// pessoa.cpf = prompt("Digite o cpf da pessoa");


// alert(
// `Nome:  ${pessoa.nome}
// Idade: ${pessoa.idade}
// CPF: ${pessoa.cpf}`
// );
let mensagem = ""
let pessoas = [
    {
        nome: "Juquinha",
        idade: 40,
        cpf: "452162351024",

    }, 
    {
        nome: "Mariazinha",
        idade: 28,
        cpf: "77788899900",
    }
]


for (let contador = 0; contador < pessoas.length; contador++) {

 mensagem +=  
`Nome:  ${pessoas[contador].nome}
Idade: ${pessoas[contador].idade}
CPF: ${pessoas[contador].cpf}`
    }

alert(mensagem)
console.log(mensagem)




