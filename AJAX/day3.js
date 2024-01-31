// let pro = new Promise(function(resolve,reject){
//     let x = 10
//     let y = 10
//     if ( x == y) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// let pro = new Promise(function(resolve,reject){
//     let x = 10
//     let y = 10
//     if (x == y) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("I will always executed")
// })

// let pro = new Promise(function(resolve,reject){
//     let x = 10
//     let y = 10
//     if (x == y) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro
// .then(function(str){
//     console.log(str)
//     return "welcome All"
// })
// .then(function(str){
//     console.log(str)
//     return "minskole"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("Always")
// })

//Asynch ==> synch
//dependent flow
//userCreate => getID => getUserInfo

function person() {
    setTimeout(function () {
        console.log("Create User")
        setTimeout(function () {
            console.log("GetID")
            setTimeout(function () {
                console.log("Get Info")
            }, 1000)
        }, 2000)
    }, 3000)
}
//person()

//===============================================

// function createUser(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("User Create")
//         },3000)
//     })
// }

// function getID(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Get ID")
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Get Info")
//         },1000)
//     })
// }

// createUser()
// .then(function(str){
//     console.log(str)
//     return getID()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("reject")
// })
// .finally(function(){
//     console.log("Always")
// })

//=====================================================

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("User create")
        },3000)
    })
}

function getID(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Get ID")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Get Info")
        },1000)
    })
}

async function getUsers(){
    let a1 = await createUser()
    console.log(a1)
    let a2 = await getID()
    console.log(a2)
    let a3 = await getInfo()
    console.log(a3)
}
getUsers()

