var fs = require('fs'),
    Promise = require('promise');

function read(file){
    return new Promise(function(fulfill, reject){
        fs.readFile(file, function(err, data){
            err ? reject() : fulfill(data.toString());
        });
    });
}

read("my_file.txt")
.then((data) => {
    console.log(data);
    return '1111111';    
})
.then((data) => {
    console.log(data);
    return '2222222';    
})
.then((data) => {
    console.log(data);
    return '3333333';    
})
.done((data) => {
    console.log(data);
});

// exemplo de callback hell
read('my_file.txt', function(data1, callback1){
    console.log(data1);
    callback1('111111', function(data2, callback2){
        console.log(data2);
        callback2('2222222', function(data3, callback3){
            console.log('3333333', function(data4, callback4){
                console.log(data4);
            });
        });
    });
});