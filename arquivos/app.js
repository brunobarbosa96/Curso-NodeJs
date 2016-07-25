var fs = require('fs');

// o comando abaixo serve para criar um arquivo já escrevendo 
fs.writeFile('my_file.txt', 'Meu primeiro arquivo txt com node.js', (err) =>{
   if(err) 
       console.log(err);
    
       console.log*('arquivo criado');
});

// o comando abaixo servfe para incrementar alguma coisa no arquivo já criado
fs.appendFile('my_file.txt', 'Aqui entra uma linha incrementadando meu arquivo', (err) =>{
    if(err)
        console.log(err);
    
        console.log*('arquivo criado');
});

// o comando abaixo serve para ler o arquivo
fs.readFile('my_file.txt', (err, data) => {
    if (err)
        console.log(err);

    console.log(data.toString());
});

// listando de forma síncrona 
var data = fs.readFileSync('my_file.txt');
console.log(data.toString());