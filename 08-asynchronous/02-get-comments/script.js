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

    // listen to the click event to run the getComment function
    document.getElementById("run").addEventListener("click", ()=> {
        window.lib.getPosts((error, article)=> {
            if (error) {
                console.log(1);
            } else {
                console.log(null);
                article.forEach(art =>{
                    window.lib.getComments(art.id, (error, table)=> {
                        if (error) {
                            console.log("one")
                        } else {
                            console.log(null);
                            art.id = table;
                            console.log(table);
                        }
                    });
                })
            }
        });
    })

})();
