const frutas = new Array(5)
mensagem = ``


for (let index = 0; index < frutas.length; index++) {
    
    frutas[index] = prompt(`Digite a ${index+1}º fruta`);
}

mensagem = "Segue as frutas digitadas: \n";

for (let contador = 0; contador < frutas.length; contador++) {
    
    mensagem += `${frutas[contador]} \n`;
    
}

alert(mensagem);

