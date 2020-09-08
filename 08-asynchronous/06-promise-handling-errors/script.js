/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // create function to display when the btn is clicked
    const displayPerson = ()=> {
        // get the promise and then resolve it is respond else catch the error
        let promise = Promise.resolve(window.lib.getPersons());
        promise.then(person => {
            console.log(person);
        }).catch(error => {
            console.log(error);
        })
    };

    // listen to the click event then call the display function
    document.querySelector("#run").addEventListener("click", displayPerson)
})();
