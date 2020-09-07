/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getPerson = async () => {
        const person = await window.lib.getPersons();
        try {
            console.log(person);
        } catch (error) {
            console.log(error);
        }
    };
    // listen to the click event
    document.querySelector("#run").addEventListener("click", ()=> {
        getPerson();
    })

})();
