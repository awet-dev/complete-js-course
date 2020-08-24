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

    var name = prompt("What is your name");
    var age = prompt("How old are you?");
    var place = prompt("Where do you live please?");
    var answer = confirm(`My name is ${name} and I am ${age} years old and I live in ${place}`);
    if (answer == !true) {
        var name = prompt("What is your name");
        var age = prompt("How old are you?");
        var place = prompt("Where do you live please?");
    }
})();

