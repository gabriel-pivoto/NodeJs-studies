const fs  = require('fs')

if(!fs.existsSync('./myFolder')){
    console.log('It doesnt exist!')
}

fs.mkdirSync('myFolder')

if(fs.existsSync('./myFolder')){
    console.log('exist!')
}