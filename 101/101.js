/**
 * 4-8 与 9-15 输出一致。
 * setTimeout调用中，变量沿着定义作用域向上查找。
 * setTimeout回调函数被按照delay参数的大小，依次插入事件队列。
 */
// function print(n){
//   setTimeout(() => {
//     console.log(n);
//   }, Math.floor(Math.random() * 1000));
// }
// function print(n) {
//     console.log('fun:', n)
//     setTimeout(function(){
//         console.log(n);
//         // return () => {};
//     }, Math.floor(Math.random() * 1000));
// }
// function print(n){
//   setTimeout(() => {
//     console.log(n);
//   }, 1, Math.floor(Math.random() * 1000));
// }

function print(n) {
    console.log('fun:', n)
    /* setTimeout((() => {
        console.log(n);
        return () => {};
    }).apply(n), Math.floor(Math.random() * 1000)); */
    setTimeout((() => {
        console.log(n);
        return () => {};
    })(), Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 10; i++) {
    print(i);
}