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

    // create display function to display people array
    const displayPerson = ()=> {
        window.lib.getPersons((error, people)=> {
            if (error) {
                console.log("one");
                // if error display it to the console
                console.error();
            } else {
                // display the people array otherwise
                console.log(people);
            }
        });
    };

    // listen to the click event to display the people array
    document.querySelector("#run").addEventListener("click", displayPerson);
})();
