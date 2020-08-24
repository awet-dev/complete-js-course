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
    let value1 = parseFloat(document.getElementById("number").value);

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        function factorial(value1) {
            let result = value1;
            if (value1 === 0 || value1 === 1)
                return 1;
            while (value1 > 1) {
                value1--;
                result *= value1;
            }
            return result;
        }
        alert(factorial(value1));
    });

})();
