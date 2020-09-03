/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the target and make it empty
    const target = document.querySelector("#target");
    target.innerHTML = "";

    // translated text of the text content of target
    const massage = "I am a text that will appear in a 'typewriter' effect, a bit like in black films. Except ... I don't know who the murderer is! Is there really one? Does he live at 21? What mysteries!"; /* The text */

    // set how fast the text will display with setInterval
    let speed;
    setInterval(()=> {
        speed = Math.floor(Math.random() * 100);
    }, 1);

    // function for the type writer effect and initiate counter for every character
    let i = 0;
    function typeWriterEffect() {
        if (i < massage.length) {
            target.innerHTML += massage.charAt(i);
            i++;
            setTimeout(typeWriterEffect, speed);
        }
    }
    typeWriterEffect();

})();
