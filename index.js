function getOrderAndDisplayCounts() {
    // prompt for the user to input froyo data
    const userInput = prompt("Enter a list of froyo flavors seperated by a comma");

    // parse user input
    const flavors = userInput.split(',');

    // Create object used to track diff flavors entered
    const flavorCounts = {};

    // used to iterate through diff flavors in the array
    flavors.forEach(flavor => {
        const trimmedFlavor = flavor.trim(); 
        if (trimmedFlavor) {
            if (flavorCounts[trimmedFlavor]) {
                flavorCounts[trimmedFlavor]++;
            } else {
                flavorCounts[trimmedFlavor] = 1;
            }
        }
    });

    // table should display flavors entered in console
    console.table(flavorCounts)
}

getOrderAndDisplayCounts();

