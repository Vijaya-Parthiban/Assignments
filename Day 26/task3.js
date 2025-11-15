function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 2000);
}
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched with Promise!");
        }, 2000);
    });
}

fetchDataPromise().then(console.log);