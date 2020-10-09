//4 1 3 6 8 9 2 7 9 5
async function async1() {
  console.log('1');//同步代码
  await async2();//异步代码 微任务
  console.log('2')
  process.nextTick(() => {
      console.log(9)//微任务 优先
  })

}

async function async2() {
  console.log('3')//同步代码
}

console.log('4');//同步代码
setTimeout(() => {
  console.log('5')//宏任务
}, 0);

async1();

new Promise((resolve) => {
  console.log('6');//同步代码
  resolve()
}).then(() => {
  console.log('7')//微任务
});
console.log('8')//同步代码
process.nextTick(() => {
  console.log(9)//微任务 优先
})