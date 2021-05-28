const {runFibonacci} = require('./fibonacciExport');
const {someMatch} = require('./threads');
(async ()=>{
   console.log(await someMatch(2));//threads +
   runFibonacci({iterations:10000}).then(result=> console.log(result)); //threads +
   console.log(await someMatch(3));//threads +
   console.log(await someMatch(4));//threads +
})()