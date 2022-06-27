const fs=require('fs')

fs.readFile('./iShot2022-03-01 16.40.02.jpg',(err,data)=>{
    if(!err){
        fs.writeFile('./tupian.jpg',data,(err,data)=>{
            if(!err){
                console.log('写入成功');
            }
        })
    }else {
        console.log(err);
    }
})