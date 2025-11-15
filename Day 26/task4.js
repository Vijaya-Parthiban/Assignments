function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Fetched data"), 2000);
    });
}

async function fetchAsyncData() {
    const data = await getData();
    console.log(data);
}

fetchAsyncData();