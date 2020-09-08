/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    // create async function
    async function asyncPost() {
        let posts = await window.lib.getPosts();
        posts.forEach(post => {
            async function asyncComment() {
                post.comment = await window.lib.getComments(post.id);
                console.log(post);
            }
            asyncComment();
        });
    }

    // listen to the click event
    document.getElementById("run").addEventListener("click", asyncPost);
})();
