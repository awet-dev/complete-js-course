/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
    const values = document.getElementById("numbers").value;

    // listen to the click and sort to the numbers in the input
    document.getElementById("run").addEventListener("click", ()=> {

        // sort the inputArray by splitting it with comma
        const inputArray = values.split(', ');
        alert(inputArray.sort((a,b)=>a-b));

    });

})();
