// comparison operator==>boolean ==>true/false

console.log(12==='12')//false

console.log(45!='45')//false

console.log(12=='12')//true

console.log(11===11)//true

//Logical Operator

//1. AND(&&) =>multiplication
//true && true ==>true
//true && false ==>false
//false && true ==>false
//false && false ==>false

console.log(7==7 && 8!=='8') //true && true ==>true
console.log(45==='45' && 34<=100) //false && true ==>false
console.log(12=='12' && 34!='34') //true && false ==>false
console.log(-3>0 && 12>=35) //false && false ==>false

//2.OR(||) ==>addition
//True || True ==>True
//True || False ==>True
//False || True ==>True
//False || False ==>False

console.log(7==7 || 8!=='8') //true || true ==>True
console.log(37==37 || 45!='45') //true || false ==>True
console.log(56==='56' || 34=='34') //false || true ==>True
console.log(12==='12' || 10!='10')//false || false ==>False

//3.NOT(!)
//true ==> !true =>false
//false ==> !false =>true

console.log(!(12>100)) //!false =>true
console.log(!(0>-12 || 23!=='34')) //true || true ==>!true =>false
console.log(!(34!=='34' && 45<='45')) //true && true ==> !true =>false
console.log(45<='45')//true

