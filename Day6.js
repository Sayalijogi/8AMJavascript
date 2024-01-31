// conditional statement

//if
//if else
//if else if
//ternary operator==>single line code
//switch case==>multiple condition

//1-7 days
//1 ==>monday
//2 tuesday

// //1. switch case without break

/*let days = 2
switch(days) {
    case 1:
        console.log("Monday")
    case 2:
        console.log("Tuesday")
    case 3:
        console.log("Wednesday")
    case 4:
        console.log("Thrusday")
    case 5:
        console.log("Friday")
    case 6:
        console.log("Saturday")
    case 7:
        console.log("Sunday")
}*/

// //2. switch case with break

/*let days = 12
switch(days) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thrusday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
}*/

//3.swich case with break and default

/*let days = 12
switch (days) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thrusday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Please enter correct days number") 
}*/

//Program 1
//city
//Pune => MH
//Ujjain =>MP
//Jaipur =>RJ

/*let city ="Nashik"
switch (city) {
    case "Pune":
        console.log("MH")
        break
    case "Ujjain":
        console.log("MP")
        break
    case "Jaipur":
        console.log("RJ")
        break
    default:
        console.log("Invalid City")
}*/


//Program 2
//city
//Pune/Nashik => MH
//Ujjain/indore => MP
//Jaipur => RJ

/*let city ="Jaipur"
switch(city) {
    case "Pune":
    case "Nashik":
    case "Nagpur":
        console.log("MH")
    break
    case "Ujjain":
    case "Indore":
        console.log("MP")
    break
    case "Jaipur":
    default:
        console.log("Invalid City")
    }*/

//Program 3

let country ="Spain"
switch (country) {
    case "France":
    case "Spain":
    case "Netherland":
        console.log("This country is in Europe")
        break
    case "UK":
    default:
        console.log("This country is not in Europe")
}

//months
//3-4-5-6 ==>summer
//7-8-9-10 ==>rainy
//11-12-1-2 ==>winter

//Homework 1
let months = 5
switch(months){
    case 3:
        console.log("Summer")
    break
    case 4:
        console.log("Summer")
        break
    case 5:
        console.log("Summer")
    break
    case 6:
        console.log("Summer")
    break
    case 7:
        console.log("Rainy")
    break
    case 8:
        console.log("Rainy")
    break
    case 9:
        console.log("Rainy")
    break
    case 10:
        console.log("Rainy")
    break
    case 11:
        console.log("winter")
    break
    case 12:
        console.log("winter")
    break
    case 1:
        console.log("winter")
    break
    case 2:
        console.log("winter")
    break
    default:
    console.log("Please enter correct month number")   
    }

//Homework

let months2=10
switch(months2) {
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("summer")
        break
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("rainy")
        break
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("winter")
        break
    default:
        console.log("please enter valid month number")
}
