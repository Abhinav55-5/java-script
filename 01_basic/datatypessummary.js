// primitive datatypes 

// 7 tpes- string,number ,bigint,symbol,boolean ,null ,undefined

const id=Symbol('123')
const id2=Symbol('123')

// console.log(id=== id2);

// reference (non primitive)

// array,object,functions(sabka datatype object hi hota hai)

const hero=["saktiman","spiderman"]
let MyObject=
{
    name:"abhinav",
    age:18,
}
const myFunction=function()
{
    console.log("hello world"); 
}

// console.log(typeof MyObject)


// **********************************************************************************

// stack (primitive) ,heap(non-primitive)

// in case  of stack memory we use a copy of the original message

let myname="abhinav"
let anothername=myname
anothername="aman"

console.log(anothername);
console.log(myname);

let objectt={
    age:18,
    email:"a@gamil.com"
}
let user2=objectt;
user2.email="d@.com"
console.log(objectt.email);
console.log(user2.email);

