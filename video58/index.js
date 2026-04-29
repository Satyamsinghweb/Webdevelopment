function nice(name) {
    console.log("hey " +name+ " you are nice")
    console.log("hey " +name+ " your t shirt is nice") 
}
nice("satyam");
function sum(a , b,c=3) {
    console.log(a,b,c);
    return a+b+c;
    
}
// agr store karna kahi pe tab hum return use karenge
result=sum(5,6);
result2=sum(3,6);
result3=sum(6);

console.log("the result is",result)
console.log("the result is",result2)
console.log("the result is",result3)

const func1 =(x)=>{
    console.log("i am arrow function",x)
}
func1(34);