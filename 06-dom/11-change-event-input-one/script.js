/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let i = 1;
    const input = document.querySelector("#pass-one");
    const counter = document.querySelector("#counter");
    input.addEventListener("keypress", ()=> {
        if (i < 11) {
            counter.innerHTML = `${i}/10`;
            i++;
        } else {
            input.setAttribute("maxlength", "10");
        }
    })

})();
