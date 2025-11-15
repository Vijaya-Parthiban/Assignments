try {
    JSON.parse("{invalidJson}");
} catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}