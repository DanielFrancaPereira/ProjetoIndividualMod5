//Abra um novo terminal, digite # node script.js #; coloque a propriedade e ao sair ele entregará em ordem alfabética.

const readline = require('readline-sync');

let propriedade = [];

while(true){
  let propr = readline.question('Digite uma propriedade de CSS ou SAIR para finalizar: ');
  if(propr.toLowerCase() === 'sair'){
    break;
  }
  propriedade.push(propr);
}

propriedade.sort();

console.log('Propriedades de CSS ordenadas em ordem alfabética:');
propriedade.forEach(propr => console.log(propr));

