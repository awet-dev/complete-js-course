/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // listen to the window loading
    window.addEventListener("load", ()=> {
        let numPicked = Math.floor(Math.random()*100);
        let counter = 0;
        const repeatFun = ()=> {
            let userAnswer = prompt("Guess a number between 1 and 100");
            counter++;
            if (numPicked === parseInt(userAnswer)) {
                alert(`that's it! you get it in ${counter} try`);
            } else if (numPicked > parseInt(userAnswer)) {
                alert("higher");
                repeatFun();
            } else {
                alert("lower");
                repeatFun();
            }
        }; repeatFun();
    })

})();
