/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let v1 = parseFloat(document.getElementById("op-one").value);
    let v2 = parseFloat(document.getElementById("op-two").value);

    const performOperation = function(operation) {
        // perform the operation
        switch (operation) {
            case "addition":
                alert(v1 + v2);
                break;
            case "subtraction":
                alert(v1 - v2);
                break;
            case "multiplication":
                alert(v1 * v2);
                break;
            case "division":
                alert(v1 / v2);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
