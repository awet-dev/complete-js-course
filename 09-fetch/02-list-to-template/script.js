/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // select the target
    const target = document.querySelector("#target");

    // create fetchData for fetching data from the server
    const fetchData = ()=> {

        // fetch the data and then display by passing it to json method
        fetch('http://localhost:3000/heroes')
            .then(response => {
                // get data that can be used by javascript
                return response.json();
            }).then(allData => {
                allData.forEach(data => {
                    // get the template which is in Html
                    let temp = document.querySelector("#tpl-hero").content.cloneNode(true);
                    // update all the data to it
                    temp.querySelector(".name").innerHTML = data.name;
                    temp.querySelector(".alter-ego").innerHTML = data.alterEgo;
                    temp.querySelector(".powers").innerHTML = data.abilities;
                    target.appendChild(temp);
                });
        })
    };
    // listen to the click event
    document.querySelector("#run").addEventListener("click", fetchData);
})();
