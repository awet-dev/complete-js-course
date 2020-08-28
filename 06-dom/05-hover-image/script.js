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

    // your code here
    let image = document.querySelector("img");
    let srcValue1 = image.getAttribute("src")
    let srcValue = image.getAttribute("data-hover");
    image.addEventListener("mouseover", ()=> {
        image.setAttribute("src", `${srcValue}`);
    })
    image.addEventListener("mouseout", ()=> {
        image.setAttribute("src", `${srcValue1}`);
    })


})();
