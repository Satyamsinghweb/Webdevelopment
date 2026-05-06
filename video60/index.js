 let a="harry"
 console.log(a);
 console.log(a[0]);
 console.log(a[1]);
 console.log(a[2]);
 console.log(a[3]);
 console.log(a[4]);
 let name="satyam";
 let friend="kartikey"
 console.log("hey "+name+" this is your friend "+friend)
 console.log(`hey ${name} this is your friend ${friend}`)
//  use backtick.
 let s="satya\"m"
// {escape characater}or use backtick
let b="shivam"

console.log(b.toUpperCase());
console.log(b.length);
console.log(b.toLowerCase());
console.log(b.slice(1,4));
console.log(b.slice(1));
console.log(b.replace("sh","77"))
// only replaces the first occurence
console.log(b.concat(a,"aishwarya"))
console.log(b)
// this shows the strings are immutable
console.log(b.endsWith("am"))
console.log(b.startsWith("am"))
