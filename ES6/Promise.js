// const promise = new Promise(function (resolve, reject) {
//     let a = 3 + 4;
//     if (a === 7) {
//         resolve('ok');
//     } else {
//         reject('err');
//     }
// });
//
// promise.then(function (a) {
//     console.log(a);
// }, function (b) {
//     console.log(b);
// });

//AJAX

// function getJSON(url) {
//     const promise = new Promise(function (resolve, reject) {
//         const handler = function () {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         }
//         const client = new XMLHttpRequest();
//         client.open('GET', url);
//         client.onreadystatechange = handler;
//         client.responseType = 'json';
//         client.setRequestHeader('Accept', 'application/json');
//         client.send();
//     });
//     return promise;
// }
//
// getJSON('./data.josn').then(function (data) {
//     console.log(data);
// }, function (err) {
//     console.log(err);
// });

// const promise = new Promise(function (resolve, reject) {
//     let a = 4 + 3;
//     if (a === 7) {
//         resolve('ok')
//     } else {
//         reject('错了')
//     }
// });
//
// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('finally');
// });

// const jiSuan = function (a, b, c) {
//     let n = a + b;
//     if (n === c) {
//         return true;
//     } else {
//         return false;
//     }
// };
//
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (jiSuan(1, 9, 3)) {
//             resolve('p_1_√');
//         } else {
//             reject('p_1_×');
//         }
//     }, 5000);
// });
// const p2 = new Promise(function (resolve, reject) {
//     if (jiSuan(3, 2, 7)) {
//         resolve('p_2_√');
//     } else {
//         reject('p_2_×');
//     }
// });
// const p3 = new Promise(function (resolve, reject) {
//     if (jiSuan(1, 4, 5)) {
//         resolve('p_3_√');
//     } else {
//         reject('p_3_×');
//     }
// });
//
// const promise = Promise.all([p1, p2, p3]);
// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// const promise = Promise.race([p1, p2, p3]);
// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// const loadImg = function (path) {
//     return new Promise(function (resolve, reject) {
//         const img = new Image();
//         img.onload = resolve;
//         img.onerror = reject;
//         img.src = path;
//     })
// };
//
// loadImg('alsdfjl.jpg').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// let p = new Promise(function (resolve, reject) {
//     let a = 2;
//     let b = 5;
//     if (a + b === 7) {
//         resolve('执行成功');
//     } else {
//         reject('执行失败');
//     }
// });
//
// p.then((a) => {
//     console.log(a);
// }).catch((e) => {
//     console.log(e);
// }).finally(function () {
//     console.log('结束');
// });
