console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);
//when timeout is 0 delay runs after finishin up
setTimeout(() => {
    console.log('Second set timeout');
  }, 0);

console.log('Finishing up');