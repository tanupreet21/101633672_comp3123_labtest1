/**
 * Create a script with a function named lowerCaseWords that takes a
 * mixed array as input.
 * The function will do the following.
 * - return a promise that is resolved or rejected
 * - filter the non-strings and lower case the remaining words
 */

function lowerCaseWords(arr){
    //filtering the string elements
    const strings = arr.filter(element => typeof element === 'string');
    //Returning a promise
    return new Promise((resolve, reject) => {
        //if no strings in the array, then reject-throw an error
        if(strings.length === 0){
            //failure
            reject(new Error("No string elements found in the array!"));
        }
        //Otherwise :
        //Convert elements to lowercase
        const lowerCased = strings.map(element => element.toLowerCase());
        //success
        resolve(lowerCased);
    });
}

//Promise consumption to view the expected output
lowerCaseWords(["Pizza", 10, true, 25, false, "Wings"])
    .then(result => console.log(result))
    .catch(error => console.error(error));