/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // create fetch data function
    const fetchData = ()=> {
        // fetch the data and then display by passing it to json method
        fetch('http://localhost:3000/heroes')
            .then(response => {
                return response.json();
            }).then(data => {
            console.log(data);
        })
    };
    // listen to the click event to fetch data from the server
    document.querySelector("#run").addEventListener("click", fetchData);
})();
