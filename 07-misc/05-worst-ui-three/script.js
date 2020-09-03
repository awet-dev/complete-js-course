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

    // get the data-min and data-max of each inputs and put it in corresponding array
    let inputMinArray = [];
    let inputMaxArray = [];
    inputs.forEach($input=> {
        let inputMin = $input.getAttribute("data-min");
        const inputMax = $input.getAttribute("data-max");
        inputMinArray.push(inputMin);
        inputMaxArray.push(inputMax);
    });

    // run the setInterval in every input and make it increment the value of min each time
    inputMinArray.forEach((min, index)=> {
        const counter = setInterval(()=> {
            if (min < inputMaxArray[index]) {
                min++;
                if (min < 10) {
                    min = `0${min}`;
                }
                inputs[index].value = min;
            } else {
                min = inputMinArray[index];
            }
        }, 200);
        // listen to the click event and stop the counter of each input
        buttons[index].addEventListener("click", ()=> {
            clearTimeout(counter);
            target.innerHTML = `0${inputs[0].value} ${inputs[1].value} ${inputs[2].value} ${inputs[3].value}`
        })

    });

})();