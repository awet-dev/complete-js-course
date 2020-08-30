/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select an element to be the parent to the image element
    const parent = document.querySelector("#target");

    // create image element
    const newImage = document.createElement("img");

    // get image src value from data-image attribute
    const srcValue = document.querySelector("#source").getAttribute("data-image");

    // set the srcValue to the src attribute of newly created image element
    newImage.setAttribute("src", `${srcValue}`);

    // append the child image to the parent
    parent.append(newImage);


})();
