/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // listen to the click event of the button
    document.querySelector("#run").addEventListener("click", ()=> {
        window.lib.getPosts((error, lArray)=> {
            if (error) {
                console.log(1);
            } else {
                console.log(null);
            }
            console.log(lArray);
        });
    })
})();