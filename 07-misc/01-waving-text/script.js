/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the target and set text to it
    const target = document.querySelector("#target");

    // create empty array for the newly created spans
    let spanArray = [];

    // create array of letters from text content of the target
    Array.from(target.textContent).forEach($letter => {
        const span = document.createElement("span"); // create spans equivalent to the number of letters
        span.innerHTML = $letter; // update each span with the letter of the array
        spanArray.push(span);
    });
    // make the target empty, b/c we will add spans children to it later
    target.innerHTML = "";

    // initiate the font size with 20px
    let fontSize = 20;
    setInterval(() => {
        spanArray.forEach($span => {
            if (fontSize > 30) {
                fontSize = 20;
            }
            // append each span to the target
            target.appendChild($span);

            // give fontsize style to the span and increment fontsize by 3.
            $span.style.fontSize = `${fontSize}px`;
            fontSize += 3;
        });
    }, 200);

})();
