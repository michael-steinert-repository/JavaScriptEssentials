/* The Promise Object is used for asynchronous Computations */
/* It represents a Value which may be available now or in Future or never */
/* The Async-Await Syntax allows to omit the .then() in a Promise Call */
const customers = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 2_000_000_000) {
            i++;
        }
        resolve([
            {name: "Michael", id: 1},
            {name: "Marie", id: 1}
        ]);
    });
});

const addresses = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 2_000_000_000) {
            i++;
        }
        resolve([
            {customerId: 1, address: "Germany"},
            {customerId: 2, address: "Germany"}
        ]);
        reject("An Error occurred");
    });
});

/*
// .then() Syntax
const fetchData = () => {
    customers.then(customer => {
        addresses.then(address => {
            console.log(customer);
            console.log(address);
        }).catch(error => {
            console.error(error);
        });
    }).catch(error => {
        console.error(error);
    });
}
*/
// Async-Await Syntax
const fetchData = async () => {
    try {
        const customersFromPromise = await customers;
        const addressesFromPromise = await addresses;
        // If Data from a Promise depends on Data from another, they can be called in once or nothing
        /*
        const dataFromPromises = await Promise.all(customers, addresses);
        const [customersFromPromise, addressesFromPromise] = dataFromPromises;
        */
        console.log(customersFromPromise);
        console.log(addressesFromPromise);
    } catch (error) {
        console.log(error);
    }
}

fetchData();