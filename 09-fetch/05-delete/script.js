/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // create a function that deletes the api which has the same id as the userInput
    const deleteFun = ()=> {
        let userInput = document.querySelector("#hero-id").value;
        fetch('http://localhost:3000/heroes')
            .then(respond => {
                return respond.json();
        }).then(allData => {
            allData.forEach(data => {
                if (data.id == userInput) {
                    let index = allData.indexOf(data);
                    allData.splice(index, 1);
                    console.log(allData);
                }
            });
        })
    };

    // listen to the click event of the button
    document.querySelector("#run").addEventListener("click", deleteFun)
})();
