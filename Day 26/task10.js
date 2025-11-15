function asyncCounter() {
    let count = 0;
    return function() {
        count++;
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Counter updated: ${count}`);
            }, 1000);
        });
    };
}

const counterPromise = asyncCounter();

async function runCounter() {
    console.log(await counterPromise()); 
    console.log(await counterPromise()); 
    console.log(await counterPromise()); 
}

runCounter();