setTimeout(()=>{
  console.log("Timeout");
},1000)

//setImmediate立即执行函数,异步代码,当同步代码执行完成后立即调用
setImmediate(()=>{
  console.log("immediate");
})

//异步代码,这是语义化的微任务设置,立即执行函数
queueMicrotask(()=>{
  console.log("microtask");
})

//console.log(global);

//立即执行函数也是微任务,优先一切异步代码执行,当同步代码执行完成就执行nextTick
process.nextTick(()=>{
  console.log("nextTick")
})