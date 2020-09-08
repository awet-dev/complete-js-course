/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // create addComment function to add the comment from getComment function to the articles array
    const addComment = ()=> {
        window.lib.getPosts((error, articles)=> {
            if (error) {
                console.log(1);
            } else {
                // for every article add comment and the display the article
                articles.forEach(article => {
                    window.lib.getComments(article.id, (error, comments)=> {
                        if (error) {
                            console.log("one")
                        } else {
                            article.comment = comments;
                            console.log(article);
                        }
                    })
                })
            }
        });
    };

    // listen to the click event to get comment from the addComment function
    const btn = document.querySelector("#run");
    btn.addEventListener("click", addComment);

})();
