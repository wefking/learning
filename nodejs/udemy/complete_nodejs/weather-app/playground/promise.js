var asyncAdd = (a, b) => {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (typeof a === 'number' && typeof b === 'number') {
               resolve(a + b);
           } else {
               reject('Argumets must be numbers');
           }
       }, 1500);
   });
};

// Promise chaining
// asyncAdd(5, "7").then((res) => {
//     console.log('Result: ', res);
//     return asyncAdd(res, 24);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('Result should be: 36. Result is : ', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });
asyncAdd(5, "7").then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 24);
}).then((res) => {
    console.log('Result should be: 36. Result is : ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         reject('Unable to fulfill promise!');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);

// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// })