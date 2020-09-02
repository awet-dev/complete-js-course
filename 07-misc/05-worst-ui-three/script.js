/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the target and all the inputs and buttons at a time
    const target = document.querySelector("#target");
    const buttons = document.querySelectorAll("button");
    const inputs = document.querySelectorAll("input");

    // get the data-min of each inputs with let b/c it will increment on each click
    let inputMinArray = [];
    let inputMaxArray = [];
    inputs.forEach($input=> {
        let inputMin = $input.getAttribute("data-min");
        let inputMax = $input.getAttribute("data-max");
        inputMinArray.push(inputMin);
        inputMaxArray.push(inputMax);
    });

    // the 1st setInterval function => this function run for ever if not stopped
    const counterOne = setInterval(() => {

        // check if the data-min value is less than or not to the data-max, if so increment it.
        if (inputMinArray[0] < inputMaxArray[0]) {
            inputMinArray[0]++;
            // display the value of the continuously incrementing to the input
            inputs[0].value = inputMinArray[0];
        } else {
            // if greater take it back to its initial value and start once again
            inputMinArray[0] = 460;
        }
    }, 20); // the speed of running this function

    // listen to the click event of the stop button, terminate the running function
    buttons[0].addEventListener("click", ()=> {
        clearInterval(counterOne);
        // and then display the value when stopped to the target
        target.innerHTML = `0${inputMinArray[0]} ${inputMinArray[1]} ${inputMinArray[2]} ${inputMinArray[3]}`
    });

    // the above comments go on all the following functions the same way
    const counterTwo = setInterval(() => {
        if (inputMinArray[1] < inputMaxArray[1]) {
            inputMinArray[1]++;
            if (inputMinArray[1] < 10) {
                inputMinArray[1] = `0${inputMinArray[1]}`;
            }
            inputs[1].value = inputMinArray[1];
        } else {
            inputMinArray[1] = 0;
        }
    }, 20);
    buttons[1].addEventListener("click", ()=> {
        clearInterval(counterTwo);
        target.innerHTML = `0${inputMinArray[0]} ${inputMinArray[1]} ${inputMinArray[2]} ${inputMinArray[3]}`
    });
    const counterThree = setInterval(() => {
        if (inputMinArray[2] < inputMaxArray[2]) {
            inputMinArray[2]++;
            if (inputMinArray[2] < 10) {
                inputMinArray[2] = `0${inputMinArray[2]}`;
            }
            inputs[2].value = inputMinArray[2];
        } else {
            inputMinArray[2] = 0;
        }
    }, 20);
    buttons[2].addEventListener("click", ()=> {
        clearInterval(counterThree);
        target.innerHTML = `0${inputMinArray[0]} ${inputMinArray[1]} ${inputMinArray[2]} ${inputMinArray[3]}`
    });
    const counterFour = setInterval(() => {
        if (inputMinArray[3] < inputMaxArray[3]) {
            inputMinArray[3]++;
            if (inputMinArray[3] < 10) {
                inputMinArray[3] = `0${inputMinArray[3]}`;
            }
            inputs[3].value = inputMinArray[3];
        } else {
            inputMinArray[3] = 0;
        }
    }, 20);
    buttons[3].addEventListener("click", ()=> {
        clearInterval(counterFour);
        target.innerHTML = `0${inputMinArray[0]} ${inputMinArray[1]} ${inputMinArray[2]} ${inputMinArray[3]}`
    });

})();
