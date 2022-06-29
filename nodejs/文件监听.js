const fs = require('fs')

fs.watch('helloFS.txt', () => {
    console.log('文件发生变化了');
})