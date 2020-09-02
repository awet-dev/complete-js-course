/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the input element of the html
    let input = document.querySelector('#slider'),
        target = document.querySelector('#target');

    target.innerHTML = `0${input.value}`;

    // listen to the input change to display the corresponding value in the target;
    input.addEventListener('input', function () {
        target.innerHTML = `0${input.value}`;
    }, false);

})();
