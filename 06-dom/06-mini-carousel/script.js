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

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    const image = document.querySelector("img");
    let $imgSrc = 1
    document.querySelector("#next").addEventListener("click", ()=> {

        if ($imgSrc < gallery.length) {
            image.setAttribute("src", `${gallery[$imgSrc]}`);
            $imgSrc++
        } else {
            $imgSrc = 0;
            image.setAttribute("src", `${gallery[$imgSrc]}`);
            $imgSrc++
        }
    })

})();
