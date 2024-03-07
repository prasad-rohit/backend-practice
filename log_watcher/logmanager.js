const fs = require("fs")

async function onboot(){
    const status = await new Promise((resolve, reject) => {
        fs.stat("log.txt", (err, data) => {
            if(err){
                reject(err);
            }
            
            resolve(data)
        })
    })
    console.log(status)
}

onboot()
