/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // select the target element
    let target = document.querySelector("#target");

    // create a function to display data on the webpage
    const displayFun = ()=> {

        // get the user input
        let userInput = document.querySelector("#hero-id").value;
        // fetch the data from the server
        fetch('http://localhost:3000/heroes')
            .then(respond => {
                return respond.json();
            }).then(allDatas => {
                allDatas.forEach(data => {
                    // display only the data with the id that the user gives
                    if (data.id == userInput) {
                        let temp = document.querySelector("#tpl-hero").content.cloneNode(true);
                        // update all the data to it
                        temp.querySelector(".name").innerHTML = data.name;
                        temp.querySelector(".alter-ego").innerHTML = data.alterEgo;
                        temp.querySelector(".powers").innerHTML = data.abilities;
                        target.appendChild(temp);
                    }
                })
        })
    };
    // listen to the click event of the button
    document.querySelector("#run").addEventListener("click", displayFun)
})();
