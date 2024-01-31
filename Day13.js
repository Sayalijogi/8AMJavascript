//javascript ==> object

//SBI,HDFC,PNG ==>Bank ==>object
//property acc name,branch,branch name,reg number
//Methods deposit(),withdraw(),transaction()

//Mayuri,vaibhava,ram,sham ==>human/person ==>object
//Property==> age,color,height,weight
//method ==> talk(),walk(),speak(),sleep(),study()

// //method => study()
// //action ==>learn something,write,read
// //return ==> job,marks

let a=20
console.log(typeof a)
//let b="mayuri"

// //datatype ==>array =>collection of multiple elements

//let arr = []
//console.log(typeof arr) //array==>object

//let arr1 = ["mayuri",23,true,null,456]

// //index wise ==>0
let marks =[23,56,78,33,560,40]
// index     0  1  2  3   4  5
// length    1  2  3  4   5  6

console.log(marks[1]) //56
console.log(marks[3]) //33

// //property
// //length ==>return the total number of element present in array ==>number
//console.log(marks.length)

// //array first element ==>[0]
//console.log(marks[0])

// //last element
//marks.length - 1 // ==>last index
//console.log(marks[marks.length - 1])

let student = ["mayuri","sham","rohini","rahul","mahesh","sarika","chaitu","prashant","ronit","jaya"]
//                   0       1       2       3        4        5        6       7        8        9

console.log(student[1])
console.log(student[4])

//loop =>0-5
for(let i =0; i<=5; i++){
    // console.log(i) //index
    console.log(student[i])
}

//i <=student.length-1 ==>7
//i <student.length ==> 7

//forword
for (let i = 0; i < student.length; i++){
    console.log(student[i])
}

let student1 = ["mayuri","sham","rohini","rahul","mahesh","sarika","chaitu","prashant","ronit","jaya"]
for(let i=student1.length-1; i>=0; i--){
    console.log(student1[i])
}

//===========================================================================================

//methods

let score = [100,78,99,45,67,34]

//1.push()
//action =>add element at last
//return =>new length of array

let a1=score.push(500)
console.log(a1)
console.log(score)

//2.unshift()
//action ==>add element at first
//return ==>new length

let b=score.unshift(4000)
console.log(b) //8
console.log(score) 
