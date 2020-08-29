/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    const inputOne = parseFloat(document.getElementById("op-one").value);
    const inputTwo = parseFloat(document.getElementById("op-two").value);

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(inputOne + inputTwo);
    });

    document.getElementById("subtraction").addEventListener("click", function() {
        // perform an subtraction
        alert(inputOne - inputTwo);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(inputOne * inputTwo);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(inputOne / inputTwo);
    });

})();

