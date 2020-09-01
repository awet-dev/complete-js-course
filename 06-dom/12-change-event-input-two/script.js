/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // initiate the general input counter and number counter only
    let inputCounter = 0;
    let numCounter = 0;

    // select input and validator elements
    const input = document.querySelector("#pass-one");
    const validator = document.querySelector("#validity");

    // listen to the keypress event
    input.addEventListener("keypress", $event => {

        // check if input value is number or not, accordingly increment the iterator
        if(isNaN($event.key)) {
            inputCounter++;
        } else {
            numCounter++;
            // if number add the number iterator to the general iterator
            inputCounter++;
        }
        /* then check if general iterator is at least equal to 8 and number iterator is at least 2,
         so then convert the validator to "Ok"
         */
        if (inputCounter >= 8 && numCounter >= 2) {
            validator.innerHTML = "Ok"
        }
    });



})();
