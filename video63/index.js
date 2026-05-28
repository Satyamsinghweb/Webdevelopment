let arr =[1,2,4,7]
let arr2=[1,6,8,9,10]
arr[0]=5666
// arrays are mutable 
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
// shows popped element it pops frm last
console.log(arr.push("satyam","harry"))
console.log(arr)
console.log(arr.concat(arr2))
console.log(arr2)
let numbers=[1,2,3,4,5]
console.log(numbers.splice(1,3))
numbers.slice(2)