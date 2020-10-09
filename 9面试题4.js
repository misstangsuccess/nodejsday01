//111 444 12 13 888 555 222 666 333 999
process.nextTick(() => {
  console.log(111);//微任务 优先
}); 

setTimeout(() => {
  console.log(222);//宏任务
}, 0); 
setImmediate(() => {
  console.log(333);//宏任务
}); 

const promise = Promise.resolve();//异步代码 

promise
  .then(() => {//微任务
      console.log(444); 
      process.nextTick(() => {//微任务
          console.log(555);
      }); 
      Promise.resolve().then(() => {
          console.log("12 12 12");//微任务
      }); 
      queueMicrotask(() => {
          console.log("13 13 13 ");//微任务
      }); 
      setTimeout(() => {
          console.log(666);//宏任务
      }, 0); 
  })
  .catch(() => {
      console.log(777);//微任务
  })
  .then(() => {
      console.log(888); //微任务
      setImmediate(() => {
          console.log(999);//宏任务
      }); 
  })
  .catch(() => {
      console.log(101010);//宏任务
  })