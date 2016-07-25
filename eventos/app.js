'use strict'; // declarando modo estrito do javascript

var EventEmitter = require('events'); //requerindo modulo que trata de eventos via npm

var emitter = new EventEmitter(); //"instanciando" novo eventEmitter

// registrando meu evento
emitter.on('meu_evento', (parametro) => {
    console.log('meu_evento', parametro);
});

// invocando meu evento
emitter.emit('meu_evento', 123);

// herdando configurações do meu evento para uma classe "objeto" Cão
class Cao extends EventEmitter {
    latir () {
        console.log('au-au!');
    }
}

var Rex = new Cao(); // "instanciando" novo Cao -> EventEmitter

Rex.on('pessoa_no_portao', Rex.latir); //registrando meu evento 

// invocando meu evento
Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
Rex.removeListener('pessoa_no_portao', Rex.latir); // ao executar esse comando ele cancela que o listener seja executado ...
//... mais uma vez, ou seja corta a declaração do meu evento assim ele não será mais executado como o exemplo da linha de baixo
Rex.emit('pessoa_no_portao');

Rex.once('pessoa_no_portao', Rex.latir); //once diz que o listener só funcionará a primeira vez que ficar ouvindo. Após isso ele se autodestrói

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao'); // esse comando e o de baixo não será executado devido ao "once"
Rex.emit('pessoa_no_portao');