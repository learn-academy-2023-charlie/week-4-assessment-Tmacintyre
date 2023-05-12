// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffArr", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuffArr(["yellow", "blue", "pink", "green"])).not.toEqual(expect.arrayContaining(colors1))
    expect(shuffArr(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])).not.toEqual(expect.arrayContaining(colors2))
  })
})

// FAIL  ./code-challenges.test.js
// shuffArr
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

// ● shuffArr › takes in an array, removes the first item from the array and shuffles the remaining content.

//   ReferenceError: shuffArr is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass. 

// PseudoCode:
// Input: An array of strings
// Output: A subset of the original array with the first element removed, then the remaining values shuffled throughout the new arrays indexes.
// Create funtion named shuffArr passing the given arrays as arguments.
// First we need to remove the first element of the given array with built in method. ".shift"
// Next we need to sort the remaining elements with built in method. ".sort"
// By using Math.random() - .05 with sort() allows me to get a random number between -.5 and .5 which .sort uses to sort the elements randomly. 
// Return new array

const shuffArr = (arr) => {
  arr.shift()
    return arr.sort(() => Math.random() - 0.5)
}

// shuffArr
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("endTally" , () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
  expect(endTally(votes1)).toEqual(11)
  expect(endTally(votes2)).toEqual(-31)
  })
})

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: endTally is not defined

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// PseudoCode:
// Input: An object
// Output: The end tally as an integer.
// Create a function named endTally that takes an object as an argument.
// We need to take the upvotes and subract the downvotes from it to get the end tally.
// calling the key and using dot notation with both the upVotes and downVotes allows us to access the objects values. Simply subract.
// Return the proper integer. 

const endTally = (object) => {
  return object.upVotes - object.downVotes
}

// PASS  ./code-challenges.test.js
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (3 ms)
// Create a function that takes in an object that contains up votes and down votes and returns the end tally.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDupes", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    expect(noDupes(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// FAIL  ./code-challenges.test.js
// endTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally.
// noDupes
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values.

// ● endTally › takes in an object that contains up votes and down votes and returns the end tally.

//   ReferenceError: endTally is not defined


const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// PseudoCode:
// Input: Two arrays containing strings.
// Output: A new array containing the values of the combined arrays with no dublicates.
// Create a function called noDupes that passes two separate arrays as arguments.
// Combine the the two arrays using concatenation and storing into a new array. 
// Iterate through the new array with .filter() as we will retrun a subset of the original array of different length.
// While we iterate, we need to locate the first instace of each value using indexOf, and see if it strictly equals the value of any other index. only return the first occurance. 
// Return newArr 

// const noDupes = (arr1, arr2) => {
//   newArr = arr1.concat(arr2)
//   return newArr.filter((value, index) => newArr.indexOf(value) === index)
// }

// STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// The spread operator allows expansion making the function more dynamic, therefore we add ... to each array.
// Set allows for us to create a unique array that is only allowed to have a value occur once within the set per its properties. 
//Therefor we can use the spread operator with a new set taking in the two arrays to complete the task. 
const noDupes = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])]
}

// PASS  ./code-challenges.test.js
// noDupes
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (2 ms)



