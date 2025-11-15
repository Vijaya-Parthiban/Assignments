function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total +=num;
    }
    console.log(`Total: ${total}`);   
}
sumAll(1,2,3,4,5);