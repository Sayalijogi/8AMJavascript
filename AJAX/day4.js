//backend data

//api call => data ==>frontend

let usersInfo = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// usersInfo.data.forEach(function(el){
//     //console.log(el)
//     document.write(`<h1>${el.id}</h1>`)
//     document.write(`<h2>${el.first_name}</h2>`)
//     document.write(`<h2>${el.last_name}</h2>`)
//     document.write(`<img src = ${el.avatar}>`)
// })


// let firstName="mayuri"
// let lastName="katwe"
// //My firstName is mayuri and lastname is katwe
// console.log("my firstName is"+firstName+"my lastName is"+lastName)
// console.log(`my firstName is ${firstName}`)

//====================================================

let button = document.querySelector('button')
console.log(button)


function getUserInfo() {
    fetch(`https://reqres.in/api/users?page=2`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            //console.log( res.data)
            res.data.forEach(function (el) {
                document.write(`<h1>${el.id}</h1>`)
                document.write(`<h2>${el.first_name}</h1>`)
                document.write(`<h1>${el.last_name}</h1>`)
                document.write(`<img src=${el.avatar}>`)
            })
        })
}
//getUserInfo()



button.addEventListener('click', function () {
    getUserInfo()
})
