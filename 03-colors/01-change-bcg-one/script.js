/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
    // to get the a section in the DOM document.document.querySelector("element")
    const body = document.querySelector("body");
    // your code here
    const changeColor = (bgColor) => {
        // perform the operation
        body.style.backgroundColor = bgColor;
    };

    Array.from(document.querySelectorAll("button.btn")).forEach(function(btn) {
        btn.addEventListener("click", function() {
            changeColor(btn.id);
        });
    });

})();