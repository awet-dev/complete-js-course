/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the image element
    const image = document.querySelector("img");

    // get the value to src attribute from src and data-hover
    const srcValueOne = image.getAttribute("src");
    const srcValue = image.getAttribute("data-hover");

    // listen to the mouseover mouseout events and accordingly change the src value
    image.addEventListener("mouseover", ()=> {
        image.setAttribute("src", `${srcValue}`);
    });
    image.addEventListener("mouseout", ()=> {
        image.setAttribute("src", `${srcValueOne}`);
    })


})();
