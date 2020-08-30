/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // select the image element and initiate the srcIndex of the gallery array
    const image = document.querySelector("img");
    let srcIndex = 1;

    // listen to the click event to change the src in every click
    document.querySelector("#next").addEventListener("click", ()=> {

        if (srcIndex < gallery.length) {
            image.setAttribute("src", `${gallery[srcIndex]}`);
            srcIndex++
        } else {
            srcIndex = 0;
            image.setAttribute("src", `${gallery[srcIndex]}`);
            srcIndex++
        }
    })

})();
