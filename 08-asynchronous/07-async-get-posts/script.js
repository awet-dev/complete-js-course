/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // create async function that await to the promise to resolve
    async function asyncFun() {
        const result = await window.lib.getPosts();
        console.log(result);
    }
    // listen to the click event of the button then call the async function
    document.querySelector("#run").addEventListener("click", ()=> {
        asyncFun();
    })
})();
