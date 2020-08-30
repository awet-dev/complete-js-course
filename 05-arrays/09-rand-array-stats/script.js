/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // listen to the click event to generate random numbers and update the numArray
    document.querySelector("#run").addEventListener("click", () => {

        // create empty numArray that will holds the 10 numbers
        let numArray = [];

        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            let el = Math.floor(Math.random() * (100 - 1) + 1);
            numArray.push(el);
            sum += el;

            // display to the respective position in the table
            document.querySelector(`#n-${i}`).innerHTML = `${el}`;
        }
        //get min, max and average of the elements of the array
        const min = Math.min(...numArray);
        const max = Math.max(...numArray);
        let average = sum/10;

        // display to the respective position in the list
        document.querySelector("#min").innerHTML = `${min}`;
        document.querySelector("#max").innerHTML = `${max}`;
        document.querySelector("#sum").innerHTML = `${sum}`;
        document.querySelector("#average").innerHTML = `${average}`;

    });


})();
