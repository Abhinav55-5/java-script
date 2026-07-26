const newNums=[2,3,4,5,6,7,7];

// const myNums=newNums.map((num) => num +10);


// const newNums = myNumers.map( (num) => { return num + 10})

const myNums = newNums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)


console.log(myNums);