let student = [
    {
        firstName:"Mayuri",
        lastName:"Katwe",
        age:25,
        city:"Nashik",
        skills:["Javascript","cypress","python"]
    },
    {
        firstName:"Vaibhav",
        lastName:"Raut",
        age:12,
        city:"Jalgaon",
        skills:["SQL","Selenium","MangoDB"]
    },
    {
        firstName:"Sweta",
        lastName:"Kulkarni",
        age:34,
        city:"Sangamner",
        skills:["Java","Cypress","Jmeter"]
    },
    {
        firstName:"Sam",
        lastName:"Jain",
        age:41,
        city:"Pune",
        skills:["Java","Python","React"]
    }
]
console.log(student.length)

//Program 1

//retrive the fullname of all student
student.forEach(function(el){
    //console.log(el)
    console.log(el.firstName + el.lastName)
})

console.log("=======================================")
//for loop
for(let i=0; i <student.length; i++){
    //console.log(student[i])
    console.log(student[i].firstName + student[i].lastName)
}

//Program 2
//find the fullname of all student whoes age is greater than 30

student.forEach(function(el){
    //el ==> object
    //el.age
    if (el.age > 30) {
        console.log(el.firstName + el.lastName)
    }
})

//by using filter()
let greater30 = student.filter(function(el){
    return el.age > 30
})

console.log("==================================")
greater30.forEach(function(el){
    console.log(el.firstName + el.lastName)
})

student.filter(function(el){
    return el.age > 30
}).forEach(function(el){
    console.log(el.firstName + el.lastName)
})

//Program 3
//find the sum of all age

let ageSUM = student.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(ageSUM)

//age ==> average
//avg ==> sum/no of element
let avg = ageSUM / student.length
console.log(avg)

//Program 4
//find the firstname of student whose city is pune
student.filter(function(el){
    return el.city =="Pune"
}).forEach(function(el){
    console.log(el.firstName)
})

//Program 5
//add salesforce to skills of each student
student.forEach(function(el){
    //console.log(el.skills)
    //el.skills.push("Salesforce")
    el.skills.unshift("Salesforce")
})
console.log(student)

student.forEach(function(el){
    console.log(el.skills.length)
})