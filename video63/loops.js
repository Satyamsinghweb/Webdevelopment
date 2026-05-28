let a=[1,2,3,4,5]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    //for loop
}
a.forEach((value , index , a) => {
    console.log(value , index , a)
    //foreach loop
});
let object={
    a:1,
    b:2,
    c:3,
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element)
        //for in loop
    }
}
for (const element of a) {
      console.log(element)
}//for of loop
