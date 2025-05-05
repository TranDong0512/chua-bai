// function getUser(userId, callback) {
//     setTimeout(() => {
//         callback({ id: userId, name: "John", age: 30 });
//     }, 1000);
// }

// function getPurchases(userId, callback) {
//     setTimeout(() => {
//         callback([
//             { id: 1, userId: userId, product: "Laptop", price: 1000 },
//             { id: 2, userId: userId, product: "Phone", price: 2000 },
//         ]);
//     }, 1000);
// }

// function getProductDetails(productId, productName, productPrice, callback) {
//     setTimeout(() => {
//         callback({ id: productId, name: productName, price: productPrice });
//     }, 1000);
// }

// getUser(1, (user) => {
//     console.log(user);
//     getPurchases(user.id, (purchase) => {
//         console.log(purchase);
//         let sum = 0
//         let count = 0
//         purchase.forEach((product) => {
//             getProductDetails(product.id, product.product, product.price, () => {
//                 sum += product.price
//                 count++
//                 if (count === purchase.length) {
//                     console.log(sum);
//                 }
//             })
//         })
//     })
// })

function getUser(userId) {
    return new Promise((resolve, reject) => {
        resolve({ id: userId, name: "John", age: 30 })
    })
}
function getPurchases(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, userId: userId, product: "Laptop", price: 1000 },
                { id: 2, userId: userId, product: "Phone", price: 2000 },
            ])
        }, 1000)
    })
}

function getProductDetails(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: product.id, name: product.product, price: product.price })
        }, 1000)
    })
}

// getUser(1)
//     .then((user) => {
//         console.log(user);
//         return getPurchases(user.id)
//     }).then((purchase) => {
//         console.log(purchase);
//         let sum = 0
//         let count = 0
//         purchase.forEach((product) => {
//             getProductDetails(product).then((data) => {
//                 console.log(data);
//                 sum += data.price
//                 count++
//                 if (count === purchase.length) {
//                     console.log(sum);
//                 }
//             })
//         })
//     }).catch(error => console.log(error)
//     )\

// async function main() {
//     try {
//         const user = await getUser(1)
//         const purchases = await getPurchases(user.id)
//         let sum = 0
//         let count = 0
//         purchases.forEach(async (product) => {
//             try {
//                 const productDetails = await getProductDetails(product)
//                 console.log(productDetails);
//                 sum += product.price
//                 count++
//                 if (count === purchases.length) {
//                     console.log(sum);
//                 }
//             } catch (error) {
//                 console.log("ow day", error);
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// main()

async function runWithAsyncAwait() {
    console.log(" Bài 3: Async/Await ");
    const user = await getUserPromise(1);
    console.log("User:", user);

    const purchases = await getPurchasesPromise(user.id);
    console.log("Purchases:", purchases);

    const details = await Promise.all(
        purchases.map((p) =>
            getProductDetailsPromise(p.id, p.product, p.price)
        )
    );
    console.log("Product Details:", details);

    const total = details.reduce((sum, item) => sum + item.price, 0);
    console.log("Total price:", total);
}

// Chạy thử
setTimeout(runWithAsyncAwait, 8000);