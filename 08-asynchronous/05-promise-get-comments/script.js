/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // create displayComment function
    const displayComment = ()=> {

        // get the post resolve it promisePosts
        const posts = window.lib.getPosts();
        let promisePosts = Promise.resolve(posts);

        // manipulate the promisePosts by running loop over it
        promisePosts.then(resultPosts => {
            resultPosts.forEach(resultPost => {

                // get the comments from the getComment function in the script
                let comments = window.lib.getComments(resultPost.id);

                // resolve the comment to the promiseComments
                let promiseComments = Promise.resolve(comments);

                // add the comment to the each post and then display it
                promiseComments.then(promiseComment => {
                    resultPost.comment = promiseComment;
                    console.log(promiseComment);
                })

            })
        });
    };

    // listen to the click event
    document.querySelector("#run").addEventListener("click", displayComment);
})();
