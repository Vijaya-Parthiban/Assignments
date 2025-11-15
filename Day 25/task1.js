try {
    console.log(nonExistentVar); 
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Caught a ReferenceError:", error.message);
    }
}