// First for loop
for (let i = 1; i <= 10; i++) {
    console.log("Number is: " + i);
}

// Array declaration
let myArray = ["Batman", "Superman", "Wolverine"];

// Second for loop to iterate over the array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// While loop to iterate over the array
let arr = 0;
while (arr < myArray.length) {
    console.log(`Result is ${myArray[arr]}`);
    arr = arr + 1;
}
// High order of Array
const arr01 = ["One","Two","Three","Four"]

for (const i in arr01){
    console.log(arr01[i])
}

// Map 
const map = new Map();
map.set("India","Delhi");
map.set("US","Washington");
map.set("China","Taiwan");
console.log(map);

for (const [key,value] of map)
{
    console.log(key,' -> ',value);
}

//Arrow  Function
const codingQuestion = ["js","ruby","python","java","c","c++"]
codingQuestion.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

const myCode = [
    {
        languageName : "Javascript",
        languageScript : "JS"
    },
    {

    },
    {

    }
]
myCode.forEach( (item) => {
    console.log(item.languageName)
})

//Filters.....just to return true or false based on the given conditionmeans aga condition follow karege to vo uss element ko return kar dega  and map is used to 

const numberFilter = [12,34,56,2,1,5,788]
const newNumber = numberFilter.filter( (nums) => nums > 4)
console.log(newNumber)

const newNumberTwo = numberFilter.filter( (num) => {
    return num > 4
}) 
console.log(newNumberTwo)


const myNumber = [1,3,5,32,9,8]
const newNumbers = myNumber.map( (num) => {return num + 10})

console.log(newNumbers)
const newNums = myNumber
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNums)

const numd = [1,3,5,9]
const myTotal = numd.reduce(function(acc,currval)
{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal)

// using arrow functions
const myyTotal = numd.reduce( (acc,curr) => acc+curr, 0) 
console.log(myyTotal)

//reduce

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Using reduce to count occurrences of each fruit
const countOccurrences = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(countOccurrences);  


//Document objects model




