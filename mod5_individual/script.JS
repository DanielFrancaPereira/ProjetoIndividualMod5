const readline = require('readline-sync');

let propriedade = [];

while(true){
  let prop = readline.question('Digite uma propriedade de CSS ou SAIR para finalizar: ');
  if(prop.toLowerCase() === 'sair'){
    break;
  }
  propriedade.push(prop);
}

propriedade.sort();

console.log('Propriedades de CSS ordenadas em ordem alfabética:');
propriedade.forEach(prop => console.log(prop));