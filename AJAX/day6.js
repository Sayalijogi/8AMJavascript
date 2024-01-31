function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res.data
    })
}

function getUserInfo() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("Bye")
        },2000)
    })
}

//Promise Combinators

//Promise.All() ==> shortcircuit at reject state

// async function getUsers(){
//     try {
//         let a = await Promise.all([
//             getUser(1),
//             getUser(2),
//             getUser(3),
//             getUserInfo()
//         ])
//         console.log(a)
//     }
//     catch {
//         console.log("error")
//     }
// }
// getUsers()

//Promise.allsettled() => executed for both resolve and reject

// async function getAlluser(){
//     let a = await Promise.allSettled([
//         getUser(1),
//         getUserInfo(),
//         getUser(2)
//     ])
//     console.log(a)
// }
// getAlluser()

//Promise.race() => whoever reached first give response

async function getAlluser(){
    try {
        let a = await Promise.race([
            getUser(1),
            getUserInfo(),
            getUser(2)
        ])
        console.log(a)
    }
    catch{
        console.log("Error")
    }
}
getAlluser()



