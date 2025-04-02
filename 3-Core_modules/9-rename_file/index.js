const fs = require('fs')



fs.rename('file.txt', 'file2.txt', function(err){
    if(err){
        console.log(err)
        return
    }

    console.log('file renamed')
})