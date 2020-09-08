/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const userData = ()=> {
        // get the input data by the user
        let nameInput = document.querySelector("#hero-name").value;
        let alterEgoInput = document.querySelector("#hero-alter-ego").value;
        let powersInput = document.querySelector("#hero-powers").value;

        // since we want data in array form change to array
        let powersInputArray = powersInput.split(" ");

        //create an object which will be added to the array of the api data
        let userApi = {};

        // api data from the server
        fetch('http://localhost:3000/heroes')
            .then(respond => {
                return respond.json();
            }).then(allData => {

                // update the userApi with the value of the user input
                userApi.id = allData.length + 1; // make id one plus the existing length
                userApi.name = nameInput;
                userApi.alterEgo = alterEgoInput;
                userApi.abilities = powersInputArray;
                // the push it to the array of Api from the server and log it
                allData.push(userApi);
                console.log(allData);
        })
    };

    // listen to the click event of the button
    document.querySelector("#run").addEventListener("click", userData);
})();
