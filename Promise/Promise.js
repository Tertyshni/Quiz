//1
// const getNumber =()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(10)
//         }, 1000)
//     });
// };

// getNumber()
// .then((num)=>{
//     return num + 5;
// })
// .then((num)=>{
//     return num*2;
// })
// .then((result)=>{
//     Consile.log("Result: ", result);
// })
// .catch((error)=>{
//     console.log("Error: ", error);
// })

//2
// function getUser(){
//     return Promise.resolve({
//         id: 1, 
//         name: "John"
//     });
// }

// function getOrder(user){
//     return Promise.resolve({
//         user: user,
//         price: 200
//     })
// }

// function getDiscount(order){
//     return Promise.resolve({
//         order: order,
//         discount: 20
//     })
// }

// getUser()
// .then(user => getOrder(user))
// .then(order => getDiscount(order))
// .then(result => {
//     const finalPrice = result.order.price - result.discount;
//     console.log("User: ", result.order.user.name);
//     console.log("Final Price: ", finalPrice);
// })

//3
const myPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;

        promises.forEach((promise, index) => {
            promise
                .then((result) => {
                    results[index] = result;
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};


const delay = (ms, value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
};


const p1 = delay(2000, "Data1");
const p2 = delay(500, "Data2");
const p3 = delay(1500, "Data3");


myPromiseAll([p1, p2, p3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });


