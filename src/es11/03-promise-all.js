const promise1 = new Promise((resolve, reject) => reject('Rejected!'));
const promise2 = new Promise((resolve, reject) => reject('Resolve 2!'));
const promise3 = new Promise((resolve, reject) => reject('Resolve 3'));

Promise.all([promise1, promise2, promise3])
.then(response => console.log(response))