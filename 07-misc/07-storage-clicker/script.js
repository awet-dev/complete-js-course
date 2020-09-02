/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the target and the btn
    const target = document.querySelector("#target");
    const btn = document.querySelector("#increment");

    // create counter function
    function counter() {
        if (typeof Storage === "undefined") {
            target.innerHTML = "Sorry, your browser does not support web storage...";
        } else {
            if (localStorage.click) {
                localStorage.click = Number(localStorage.click) + 1;
            } else {
                localStorage.click = 1;
            }
            target.innerHTML = `You have clicked ${localStorage.click} time(s).`;
        }
    }

    btn.addEventListener("click", counter);


})();
