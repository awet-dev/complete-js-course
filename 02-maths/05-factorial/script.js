/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
    const valueOne = parseInt(document.getElementById("number").value);

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        const factorial = valueOne => {
            let result = valueOne;
            if (valueOne === 0 || valueOne === 1) {
                    return 1;
                }
            while (valueOne > 1) {
                valueOne--;
                result *= valueOne;
            }
            return result;
        };
        alert(factorial(valueOne));
    });

})();
