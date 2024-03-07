class FileReader{
    
}

class FileWatcher{
    filePath = null;
    
    constructor(filePath) {
        this.filePath = filePath
    }
    
    async boot(){
        const fileStatus = await new Promise((resolve, reject) => {
            fs.stat(this.filePath, (err, data) => {
                if(err){
                    reject(err);
                }
                
                resolve(data);
            })
        })
        
        const filesize = fileStatus.size;
        const bufferSize = Math.min(filesize, 200);
        
        let pos = Math.max((filesize - 200), 0);
        const fd = await new Promise((resolve, reject) => {
            fs.open(this.filePath, (err, fd) => {
                if(err){
                    reject(err);
                }

                resolve(fd);
            })
        })
        
        let final = ''
        let isFileStart = false;
        
        while(!isFileStart){
            const buffer = Buffer.alloc(bufferSize)
            const bufferToRead = await new Promise(((resolve, reject) => {
                fs.read(this.filePath, (err, fd) => {
                    if(err){
                        reject(err);
                    }

                    resolve(fd);
                })
            }))
        }
        
    }
}


class LogManager{
    fileReader = null;
    fileWatcher = null;
    
    constructor(fileReader, fileWatcher){
        this.fileReader = fileReader;
        this.fileWatcher = fileWatcher;
    }
    
    boot(onBootHandler){
        
    }
    
    update(onUpdateHandler){
        this.fileWatcher.watch().then(onUpdateHandler);
    }
}

module.exports = { LogManager }
