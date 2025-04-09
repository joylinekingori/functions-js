// function that takes an array of strings and returns a new array with the length of each string
function stringLength(str){
    let str2= str.map(item=>item.length);
    return str2
    
}
let stringz=["Joy","Dave","Mercy","Jane"]
console.log(stringLength(stringz))




// function that filters out and returns only the even numbers
function even(nums){
   
    nums.filter(item=>item%2===0)
    return nums
}
const nums2=[5,18,2,4,2,6]
console.log(even(nums2))

//function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75
function students(scores){;
    let newScore = scores.filter(item=>item.marks>75);
    newScore.map(item=>item.name);
    return newScore
}
const arrScores=[
    {name:"Joy",marks:44},
    {name:"Mercy",marks:76},
    {name:"Jane",marks:90}
]
console.log(students(arrScores))

//function that accepts an array of numbers and returns a new array with each number squared using the map() method
function squared(digits){
   let square= digits.map(item=>item *item);
    return square  
};
let square2=[6,2,3,1,3]
console.log(squared(square2))

//function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
function mixedData(mixed){
    let  newMixed= mixed.filter(item=> typeof item === "string")
    return newMixed.map(item=> item.toUpperCase())
  }
  const finalMixed=["I","like",444,"welcome",true,"book"]
  console.log(mixedData(finalMixed))
  
  
  
  
  
  
  
