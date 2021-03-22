/* The Promise Object is used for asynchronous Computations */
/* It represents a Value which may be available now or in Future or never */
/*
  Promises States:
- Pending: Initial State which is not fulfilled or rejected
- Fulfilled: Meaning that the Operation completed successfully => .then()
- Rejected: Meaning that the Operation failed => .catch()
*/
const promise = new Promise((resolve, reject) => {
    /* There will never be a situation where Resolve and Reject are both available */
    setTimeout(() => {
        resolve("Data back from Promise");
    }, 2222);
    setTimeout(() => {
        reject("No Data back from Promise");
    }, 3333);
});

promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

const namesPromise = new Promise((resolve, reject) => {
    /* There will never be a situation where Resolve and Reject are both available */
    setTimeout(() => {
        resolve(["Michael", "Marie"]);
    }, 2222);
    setTimeout(() => {
        reject("No Data back from Promise");
    }, 3333);
});

const surnamesPromise = new Promise((resolve, reject) => {
    /* There will never be a situation where Resolve and Reject are both available */
    setTimeout(() => {
        resolve(["Steinert", "Schmidt"]);
    }, 2222);
    setTimeout(() => {
        reject("No Data back from Promise");
    }, 3333);
});

/* The Method all() only works if all Promises are working otherwise nothing will be done */
Promise.all([namesPromise, surnamesPromise]).then(data => {
    /* Destructuring the Array*/
    const [names, surnames] = data;
    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]} ${surnames[i]}`);
    }
}).catch(error => {
    console.log(error);
});