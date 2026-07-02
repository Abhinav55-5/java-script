const name="abhinav";
const count=40;
// console.log(`hello everyone my name is${name} ant my age is ${count}`);

const gameName= new String ("hitest-sc-com");

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// console.log(gameName.__proto__);

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-12, 4)
console.log(anotherString);


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

