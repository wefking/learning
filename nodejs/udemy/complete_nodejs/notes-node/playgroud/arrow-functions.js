// var square = (x) => {
//     var result = x*x;
//     return result;
// };


// var square = (x) => x*x;
//with one argument parentesis not needed:
var square = x => x*x;
console.log(square(9));


var user = {
    name: "william",
    //"this" won work within arrow functions
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    // alternative sintax for regular function for method inside objects:
    sayHiAlt ()    {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}
user.sayHi(1,2,3);
// user.sayHiAlt(1,2,3);