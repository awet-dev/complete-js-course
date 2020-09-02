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


    let target = document.querySelector("#target");
    target.innerHTML = "Create wave effect to the text using font-size.";


    let spanArray = [];

    Array.from(target.textContent).forEach(($letter, index) => {
        let span = document.createElement("span");
        span.innerHTML = $letter;
        spanArray.push(span);
    });

    target.innerHTML = "";

    spanArray.forEach(($span, index)=> {

        let fontSize;
        for (let i = 0; i < 6; i++) {
            fontSize = Math.floor(Math.random()*6 + 1);
        }
        target.appendChild($span);

        spanArray[index].style.fontSize = `${fontSize}rem`;


    });


})();
