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

    // your code here
    let numArray = [];
    document.querySelector("#run").addEventListener("click", () => {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            let el = Math.floor(Math.random() * (100 - 1) + 1);
            numArray.push(el);
            sum += el;
            document.querySelector(`#n-${i}`).innerHTML = `${el}`;
        }
        const min = Math.min(...numArray);
        const max = Math.max(...numArray);
        let avr = (sum/10);
        console.log(numArray);
        document.querySelector("#min").innerHTML = `${min}`;
        document.querySelector("#max").innerHTML = `${max}`;
        document.querySelector("#sum").innerHTML = `${sum}`;
        document.querySelector("#average").innerHTML = `${avr}`;

    })

})();
