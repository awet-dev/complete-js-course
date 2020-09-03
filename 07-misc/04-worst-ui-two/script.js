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

    // loop through the buttons to listen to your click event
    buttons.forEach((btn, index)=> {
        btn.addEventListener("click", ()=> {

            // check if the  data-min is still less than data-max
            if (btnMinArray[index] < btnMaxArray[index]) {
                btnMinArray[index]++;

                // check if data-min is less then ten, if so add zero in front of it
                if (btnMinArray[index] < 10) {
                    btnMinArray[index] = `0${btnMinArray[index]}`
                }
                buttons[index].innerHTML = btnMinArray[index];
                target.innerHTML = `0${btnMinArray[0]} ${btnMinArray[1]} ${btnMinArray[2]} ${btnMinArray[3]}`;
            }
        })
    });

})();
