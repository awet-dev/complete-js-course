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
    let target = document.querySelector("#target");
    target.innerHTML = "Create wave effect to the text using font-size.";

    // create empty array for the newly created spans
    let spanArray = [];

    // create array from the text content of the target
    Array.from(target.textContent).forEach($letter => {
        let span = document.createElement("span"); // create spans equivalent to the number of letters
        span.innerHTML = $letter; // update each span with the letter of the array
        spanArray.push(span);
    });

    // make the target empty, b/c we will add spans children to it later
    target.innerHTML = "";


    setInterval(() => {
        spanArray.forEach(($span, index)=> {
            // put the fontSize variable out b/c will be used out of the for loop scope
            let fontSize;
            // generate random font size b/n 1 and 6
            for (let i = 0; i < 6; i++) {
                fontSize = Math.floor(Math.random()*6 + 1);
            }
            // append each span to the target
            target.appendChild($span);
            // give fontsize style to the span.
            spanArray[index].style.fontSize = `${fontSize}rem`;

        });
    }, 300);


})();
