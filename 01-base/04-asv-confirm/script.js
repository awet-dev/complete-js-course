/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function question() {

    let name = prompt("What is your name");
    let age = prompt("How old are you?");
    let place = prompt("Where do you live please?");
    let answer = confirm(`Name: ${name}, Age: ${age}, Town: ${place} \n Please confirm ?` );
    if (answer === false) {
    question();
    }
})();

