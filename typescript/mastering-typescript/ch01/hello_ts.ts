var teste = `es6`

console.log(`Olá ${teste} Mundo!!!`);

var testStr:String = `lalalalala`;

//testStr = 1;	Erro de compilação

//---------------

import * as inquirer from 'inquirer';
inquirer.prompt(
    [
        {
            name: "nome",
            message: "Qual é o seu nome?"
        }
    ]
).then(answers => {
    console.log(`Você é: ${answers.nome}`);
});



