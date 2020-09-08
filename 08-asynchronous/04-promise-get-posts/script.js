/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // create displayPost function to return the resolved posts
    const displayPost = ()=> {
        const posts = window.lib.getPosts();
        return Promise.resolve(posts);
    };
    // get that return and display it
    let postsData = displayPost();
    postsData.then(result => {
       console.log(result);
    });

    // listen to the click event
    document.querySelector("#run").addEventListener("click", displayPost);

} )();
