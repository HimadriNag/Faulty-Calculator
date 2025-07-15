/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
let a=Number(prompt("Enter number1:"))
let b=Number(prompt("Enter number2:"))
let c=prompt("Enter operation:")
let random=Math.random()
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if (random>0.1) {
    // console.log(`The result is: ${a}${c}${b}`) here if i write like it will only give me like 5+3 not the actual calculated operation
    let ans=eval(`${a}${c}${b}`)
    console.log(`Answer is ${ans}`)
    alert(`Answer is ${ans}`) 
    // it is similar like console.log but it shows in pop up window
    
}
else{
    c=obj[c]
    let ans=eval(`${a}${c}${b}`)
    console.log(`Answer is ${ans}`)
    alert(`Answer is ${ans}`)
    
}