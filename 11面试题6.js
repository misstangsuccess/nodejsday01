//1 2 3 5 4
setTimeout(() => {
  console.log(4);//宏任务
}, 0);

new Promise(resolve => {
  console.log(1);//同步代码
  for (let i = 0; i < 10000; i++) {
      i == 9999 && resolve();
  }
  console.log(2)//同步代码
}).then(() => {
  console.log(5)//微任务
})

console.log(3)//同步代码