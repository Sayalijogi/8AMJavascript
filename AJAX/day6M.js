//Promise Combinators ==> parallel execution =>

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res.data
    })
}

function getUserinfo() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("Good Bye")
        },1)
    })
}

//1. Promise.all => shortCircuit at reject state

// async function getAllUsers() {
//     try {
//         let result = await Promise.all([
//             getSingleUser(1),
//             getUserinfo(),
//             getSingleUser(2),
//             getSingleUser(3)
//         ])
//         console.log(result)
//     }
//     catch{
//         console.log("Error occured")
//     }
// }
// getAllUsers()

//2.Promise.AllSettled ==> execute both reject and resolve

// async function getAllSettledUser() {
//     let a = await Promise.allSettled([
//         getSingleUser(2),
//         getUserinfo(),
//         getSingleUser(1)
//     ])
//     console.log(a)
// }
// getAllSettledUser()

//3.Promise.race => whoever reached first give response
// async function getRaceUser(){
//     try{
//         let res = await Promise.race([
//             getSingleUser(2),
//             getUserinfo()
//         ])
//         console.log(res)
//     }
//     catch{
//         console.log("Error at race")
//     }
// }
// getRaceUser()

//4.Promise.any() => shortcircuit at first resolve state

async function getAnyUser() {
    let aa = await Promise.any([
        getUserinfo(),
        getSingleUser(3),
    ])
    console.log(aa)
}
getAnyUser()

