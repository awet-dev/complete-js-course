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

    // listen to the click event
    document.querySelector("#run").addEventListener("click", ()=> {
        new Promise((resolve, reject) => {
            resolve(window.lib.getPosts());
            reject();
        }).then(result => {
            result.forEach(res => {
                new Promise((resolve, reject) => {
                    resolve(window.lib.getComments(res.id));
                    reject();
                }).then(result=> {
                       console.log(result);
                    })
            })
        });
        /*
        window.lib.getPosts().then(results=>{
            results.forEach(result=> {
                window.lib.getComments(result.id).then(comment=> {
                    result.id = comment;
                    console.log(comment);
                })
            })
        })
         */
    })
})();
