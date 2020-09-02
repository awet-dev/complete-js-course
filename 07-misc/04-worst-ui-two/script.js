/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the target
    const target = document.querySelector("#target");

    // select the buttons with their ids
    const buttons = document.querySelectorAll("button");

    // get the data-min and data-max of each button with
    let btnMinArray = [];
    let btnMaxArray = [];
    buttons.forEach($btn=> {
        let inputMin = $btn.getAttribute("data-min");
        const inputMax = $btn.getAttribute("data-max");
        btnMinArray.push(inputMin);
        btnMaxArray.push(inputMax);
    });

    // listen to the first btn click and update the target and its btn value and the data-min as wel.
    buttons[0].addEventListener("click", ()=> {
        if (btnMinArray[0] < btnMaxArray[0]) {
            btnMinArray[0]++;
            buttons[0].innerHTML = btnMinArray[0];
            target.innerHTML = `0${btnMinArray[0]} ${btnMinArray[1]} ${btnMinArray[2]} ${btnMinArray[3]}`;
        }
    });

    // listen to the 2nd btn click and update the target and its btn value and the data-min as wel.
    buttons[1].addEventListener("click", ()=> {
        if (btnMinArray[1] < btnMaxArray[1]) {
            btnMinArray[1]++;
            if (btnMinArray[1] < 10) {
                btnMinArray[1] = `0${btnMinArray[1]}`
            }
            buttons[1].innerHTML = btnMinArray[1];
            target.innerHTML = `0${btnMinArray[0]} ${btnMinArray[1]} ${btnMinArray[2]} ${btnMinArray[3]}`;
        }
    });

    // listen to the 3rd btn click and update the target and its btn value and the data-min as wel.
    buttons[2].addEventListener("click", ()=> {
        if (btnMinArray[2] < btnMaxArray[2]) {
            btnMinArray[2]++;
            if (btnMinArray[2] < 10) {
                btnMinArray[2] = `0${btnMinArray[2]}`
            }
            buttons[2].innerHTML = btnMinArray[2];
            target.innerHTML = `0${btnMinArray[0]} ${btnMinArray[1]} ${btnMinArray[2]} ${btnMinArray[3]}`;
        }
    });

    // listen to the 4th btn click and update the target and its btn value and the data-min as wel.
    buttons[3].addEventListener("click", ()=> {
        if (btnMinArray[3] < btnMaxArray[3]) {
            btnMinArray[3]++;
            if (btnMinArray[3] < 10) {
                btnMinArray[3] = `0${btnMinArray[3]}`
            }
            buttons[3].innerHTML = btnMinArray[3];
            target.innerHTML = `0${btnMinArray[0]} ${btnMinArray[1]} ${btnMinArray[2]} ${btnMinArray[3]}`;
        }
    });

})();
