const {Worker,isMainThread, parentPort, workerData} = require('worker_threads');

const someMatch = workerData =>{
    return new Promise((resolve,reject)=>{
        const worker = new Worker(__filename,{workerData});
        worker.on('message',(m)=>{
        console.log('this is thread number :' + worker.threadId);
        resolve(m)
        });
        worker.on('error',reject);
        worker.on('exit',code =>{
            if(code !== 0)reject(new Error(`Worker stopped with exit code ${code}`))
        })
    })
}

if (!isMainThread) {  
    const result = workerData+2;
    parentPort.postMessage("resultado es = "+result);
}


module.exports = {someMatch};