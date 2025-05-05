// function getData(callback) {
//     setTimeout(() => {
//         callback([1, 2, 3, 4])
//     }, 1000)
// }

// getData((data) => {
//     console.log(data);
// });


// function getData() {
//     return new Promise((resolve, reject) => {
//         const is = true
//         if (is) {
//             resolve([1, 2, 3, 4])
//         } else {
//             reject("Lỗi")
//         }
//     })
// }
// getData().then((data) => console.log(data)
// ).catch((err) => console.log(err)
// )


function getData() {
    return new Promise((resolve) => {
        resolve([1, 2, 3, 4])
    })
}

async function getDataAsync() {
    const data = await getData()
    console.log(data);
}

getDataAsync()