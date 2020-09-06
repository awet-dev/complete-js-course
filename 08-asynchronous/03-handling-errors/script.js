/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // listen to the click event
    document.querySelector("#run").addEventListener("click", ()=> {
        window.lib.getPersons((error, people)=> {
            if (error) {
                console.log("one");
                console.error();
            } else {
                console.log(null);
                console.log(people);
            }
        });
    })
})();
