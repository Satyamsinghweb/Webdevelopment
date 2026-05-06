let random=Math.random();
console.log(random)
let a=prompt("enter the first no")
let b=prompt("enter the operation")
let c=prompt("enter the second no ")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random>0.1){
    console.log(`the result is ${a}${b}${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    c=obj[c];
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}