// //for loop

// // welcome ==> 10 times
for (let i=0; i<10 ;i++){
    console.log("Welcome")
}

// // 20 ==> 40
for(let i=20 ; i<=40; i++) {
    console.log(i)
}

// // 11 table
for(let i=11 ; i<=110 ; i = i +11){
    console.log(i)
}

// // //10-20 number print --> 15 break
for (let i = 10 ; i<=20; i++) {
    if(i == 15) {
        break
    }
    console.log(i)
}

// // //10-20 ==> 15 skip
for(let i = 10; i<=20 ; i++) {
    if(i == 15) {
        continue
    }
    console.log(i)
}

//while loop
// 1-10

let i = 1
while (i<=10) {
    console.log(i)
    i++
}

// 20 table

let j=20
while(j<=200){
    console.log(j)
    j= j + 20
}

//hello 3 times
let k = 1
while(k<=3) {
    console.log("hello")
    k++
} 

// // 100-90
let r = 100
while (r>=90) {
    console.log(r)
    r--
}

//10-20 ==> 15 break
let s = 10
while(s<=20) {
    if(s == 15) {
        break
    }
    console.log(s)
    s++
}

//10-20 ==> 15 skip
let a = 10
while(a<=20){
    if(a == 15) {
        a++
        continue
    }
    console.log(a)
    a++
}

//==========================================================

let x = 20
console.log(x) //20
console.log(typeof x) //number

let y ="true"
console.log(typeof y) //string

let z = false
console.log(typeof z) //boolean

//20,30,40,50
//let a1=20,30,40,50

//array ==>datatype

//object
//sbi,hdfc,png ==> bank
//methods
//property
//array ==> object

// [] ==> collection of multiple element
let arr = [20,30,40,50,"mayuri",true,undefined]

