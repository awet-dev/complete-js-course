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

    // select the target element of the DOM
    const target = document.querySelector("#target");

    // create new text to in str variable and split it use split method
    const str = "Make wave effect on this paragraph using font size.";
    const strArray = str.split(" ");

    // creat empty array to put every word in and make the target content empty
    let spanArray = [];
    target.innerHTML = "";

    // loop through the strArray to create span and update it with the word of the array
    strArray.forEach(($word, index) => {
        const span = document.createElement("span");
        span.innerHTML = $word;
        spanArray.push(span);

        // update the target and the make variation on the style of the fontsize
        target.appendChild(span);
        if (index % 2 === 0) {
            span.style.fontSize = `${index}rem`;
        } else {
            span.style.fontSize = `${index-1}rem`;
        }
    });

})();
