/**
 * Given the script file callbacks.js, write a script that does the following:
 * Create a method resolvedPromise that is similar to
 * delayedSuccess and resolves a message after a timeout of 500ms.
 * Create a method rejectedPromise that is similar to
 * delayedException and rejects an error message after a timeout of
 * 500ms.
 * Call both promises separately and handle the resolved and reject
 * results and then output to the console
 */

const resolvedPromise = () => {
    let success = {'message': 'delayed success!'}
    return new Promise((resolve, reject) => {
        //resolve the message
        setTimeout(() => resolve(success), 500)
    })
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        //rejects an error msg
        setTimeout(() => reject({error: 'delayed exception!'}), 500)
    })
};

//Chaining - consuming the promises with .then() and .catch()
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result1 => console.log(result1))
    .catch(error1 => console.error(error1));