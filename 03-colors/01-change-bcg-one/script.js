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

    // your code here
    const para = document.getElementsByTagName("p");

    const changeColor = function(bgColor) {
        // perform the operation
        switch (bgColor) {
            case "red":
                alert(bgColor)
                break;
            case "green":
                alert(bgColor);
                break;
            case "yellow":
                alert(bgColor);
                break;
            case "blue":
                alert(bgColor);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.btn")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            changeColor($btn.id);
        });
    });

})();