//sync

//async => setTimeout

//userCreate ==> getID => userInfo

//callBackHell

function getInfo(){
    setTimeout(function(){
        console.log("User Create")

        setTimeout(function(){
            console.log("Get ID")

            setTimeout(function(){
                console.log("Get User Info")
            },1000)
        },2000)
    },3000)
}

//Promises => async => sync

//pending , resolve , reject

//500

// let pro = new Promise(function(resolve,reject){
//     let x = 50
//     let y = 50

//     if (x == y) {
//         resolve("Passed")
//     }
//     else {
//         reject("Failed")
//     }
// })

// //consumed

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// let pro = new Promise(function(resolve,reject){
//     let x = 50
//     let y = 100

//     if(x == y) {
//         resolve([40,23,56,78])
//     }
//     else{
//         reject([-40,-23,-56,78])
//     }
// })

// //consumed

// pro.then(function(arr){
//     console.log(arr[3]) //78
// },function(arr){
//     console.log(arr[2]) //-56
// })


// let pro = new Promise(function(resolve,reject){
//     let x = 50
//     let y = 100

//     if (x == y) {
//         resolve("Pass")
//     }
//     else {
//         reject("fail")
//     }
// })

// //consumed

// pro.then(function(str){
//     console.log(str) //resolve
// }).catch(function(str){
//     console.log(str) //reject
// })

let pro = new Promise(function(resolve,reject){
    let x = 50
    let y = 50

    if(x == y) {
        resolve("Pass")
    }
    else {
        reject("fail")
    }
})

//consumed

pro.then(function(str){
    console.log(str) //resolve
}).catch(function(){
    console.log(str) //reject
}).finally(function(){
    console.log("I will execute in any case")
})