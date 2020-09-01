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


    // set new text content to the target



    const str = "Make wave effect on this paragraph using font size.";
    const strArray = str.split(" ");

    console.log(strArray);
    let spanArray = [];
    strArray.forEach($word => {
        const span = document.createElement("span");
        span.innerHTML = $word;
        spanArray.push(span);
    });
    target.innerHTML = "";
    spanArray.forEach(($span,index) => {
       target.appendChild($span);
       if (index % 2 === 0) {
           $span.style.fontSize = 2 + "rem";
       } else {
           $span.style.fontSize = 3 + "rem"
       }
    })



})();
