// arrays 

const Myarr=[1,2,3,4,5];
const superhero=["shaktiman","spiderman"]

// console.log(Myarr[0]);

Myarr.push(6);
Myarr.pop();

// Myarr.unshift(6)  //add the numbers at the start of the array 
// Myarr.shift();    // remove the numbers from the front

// console.log(Myarr);
// console.log(Myarr.includes(9))
// console.log(Myarr.indexOf(3))


const newarr=Myarr.join()
// change the array into string and add into newarr
// console.log(Myarr);
// console.log(newarr);
// console.log(typeof newarr)

// slice splice

// In case of slice there is no chane in the array

console.log("A ", Myarr);

const myn1 = Myarr.slice(1, 3)

console.log(myn1);
console.log("B ", Myarr);
// In the case of splice there is change in the original array 
// and also includes the last element of the range 

const myn2 = Myarr.splice(1, 3)

console.log(myn2);
console.log("C ", Myarr);
