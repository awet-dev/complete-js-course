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
    const btnOne = document.querySelector("#part-one");
    const btnTwo = document.querySelector("#part-two");
    const btnThree = document.querySelector("#part-three");
    const btnFour = document.querySelector("#part-four");

    // get the data-min of each button with let b/c it will increment on each click
    let btnOneMin = btnOne.getAttribute("data-min");
    let btnTwoMin = btnTwo.getAttribute("data-min");
    let btnThreeMin = btnThree.getAttribute("data-min");
    let btnFourMin = btnFour.getAttribute("data-min");

    // get the data-max of each button with const. fixed
    const btnOneMax = btnOne.getAttribute("data-max");
    const btnTwoMax = btnTwo.getAttribute("data-max");
    const btnThreeMax = btnThree.getAttribute("data-max");
    const btnFourMax = btnFour.getAttribute("data-max");

    // listen to the first btn click and update the target and its btn value and the data-min as wel.
    btnOne.addEventListener("click", ()=> {
        if (btnOneMin < btnOneMax) {
            btnOneMin++;
            btnOne.innerHTML = btnOneMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    // listen to the 2nd btn click and update the target and its btn value and the data-min as wel.
    btnTwo.addEventListener("click", ()=> {
        if (btnTwoMin < btnTwoMax) {
            btnTwoMin++;
            if (btnTwoMin < 10) {
                btnTwoMin = `0${btnTwoMin}`
            }
            btnTwo.innerHTML = btnTwoMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    // listen to the 3rd btn click and update the target and its btn value and the data-min as wel.
    btnThree.addEventListener("click", ()=> {
        if (btnThreeMin < btnThreeMax) {
            btnThreeMin++;
            if (btnThreeMin < 10) {
                btnThreeMin = `0${btnThreeMin}`
            }
            btnThree.innerHTML = btnThreeMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    // listen to the 4th btn click and update the target and its btn value and the data-min as wel.
    btnFour.addEventListener("click", ()=> {
        if (btnFourMin < btnFourMax) {
            btnFourMin++;
            if (btnFourMin < 10) {
                btnFourMin = `0${btnFourMin}`
            }
            btnFour.innerHTML = btnFourMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

})();
