//222 7777 111 444 666 333
process.nextTick(() => {
  console.log(111); //微任务 优先
});

const promise = new Promise(resolve => {
  console.log(222); //同步代码 
  resolve();
});

setTimeout(() => {
  console.log(333); //宏任务
}, 1000);

promise.then(() => {
  console.log(444); //微任务
});

setImmediate(() => {
  console.log(666);//宏任务
});

console.log(7777) //同步代码