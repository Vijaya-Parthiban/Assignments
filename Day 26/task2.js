function task(callback) {
    console.log("Downloading...");   
    setTimeout(callback, 3000);
}

function finish() {
    console.log("Task Completed!");   
}
task(finish);