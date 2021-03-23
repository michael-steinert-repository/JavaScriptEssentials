/* AsyncAwait Functions can be paused and returns a Promise => asynchronous Computation */
/* If an Function is async then it can await Promises */
/* The Keyword await waits until the Promises get a Result back */
async function logName(name) {
    console.log(name);
    const changeNameToUpperCase = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name.toUpperCase())
        }, 2500);
    });
    const result = await changeNameToUpperCase;
    return result;
}

logName("Michael").then(response => {
    console.log(`Result from async Function ${response}`)
});

const getRandomUsers = async (n) => {
    try {
        const fetchRandomUsers = await fetch(`https://url/${n}`);
        const data = await fetchRandomUsers.json();
        data.results.forEach(user => {
            const {name, email} = user;
            console.log(`${name} - ${email}`);
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

getRandomUsers(42);