const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// In the case of browser same code will return window
//  or undefined in strict enviroment
// console.log(this)  

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()
// this inside the function is not your local variables. 
// It's the global object(or another context, depending on strict mode),
//  and it does not have a username property.

// const chai=function(){
//     let username="abhinav"
//     console.log(this.username)
// }
// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// the arrow function do not have their own this 
// function so inherits from global scope
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()