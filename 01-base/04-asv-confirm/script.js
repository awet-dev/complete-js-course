/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // question function
    const question = ()=> {

        // get information from the user
        const name = prompt("What is your name?");
        const age = prompt("How old are you?");
        const place = prompt("Where do you live please?");

        // ask the user to confirm
        const confirmation = confirm(`Name: ${name}, Age: ${age} and ${place} \n If correct: press Ok, else" press Cancel`);

        //if correct thanks him or her, else re-run the question again
        confirmation? alert(`Thanks for the information ${name}`) : question();

    };
    question();
})();

