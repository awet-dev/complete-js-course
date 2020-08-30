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

    // initiate the iterator
    let i = 1;

    // select the input and counter elements
    const input = document.querySelector("#pass-one");
    const counter = document.querySelector("#counter");

    // listen to the keypress event
    input.addEventListener("keypress", ()=> {

        /* check if number of key press is less than 11 times, so display number of times key pressed
        else set maxlength of input to limit the times of input
         */
        if (i < 11) {
            counter.innerHTML = `${i}/10`;
            // increment number of keypress by one each time key pressed
            i++;
        } else {
            input.setAttribute("maxlength", "10");
        }
    })

})();
