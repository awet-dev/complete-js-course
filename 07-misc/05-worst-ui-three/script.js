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

    // your code here
    /*
    const counter = ()=> {
        let i = 0;
        const element = document.getElementById("target");
        const funcNameHere = function () {
            element.innerHTML = `${i}%`;
            if (i === 10) {
                clearInterval(this);
            } else {
                i++;
            }
        };
        // This block will be executed 100 times.
        setInterval(funcNameHere, 70);
        funcNameHere();
    };
    counter();
     */
    // select the target and the stop buttons
    const target = document.querySelector("#target");

    const stopOne = document.querySelector("#fix-part-one");
    const stopTwo = document.querySelector("#fix-part-two");
    const stopThree = document.querySelector("#fix-part-three");
    const stopFour = document.querySelector("#fix-part-four");


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

    let stopOneValue, stopTwoValue, stopThreeValue, stopFourValue;

    // counter 1st and its stop event
    const counterOne = setInterval(() => {
        if (btnOneMin < btnOneMax) {
            btnOneMin++;
            btnOne.value = btnOneMin;
        } else {
            btnOneMin = 460;
        }
    }, 50);
    stopOne.addEventListener("click", ()=> {
        clearInterval(counterOne);
        stopOneValue = btnOneMin;
        target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
    });
    // counter 2nd and its stop event
    const counterTwo = setInterval(() => {
        if (btnTwoMin < btnTwoMax) {
            btnTwoMin++;
            if (btnTwoMin < 10) {
                btnTwoMin = `0${btnTwoMin}`;
            }
            btnTwo.value = btnTwoMin;
        } else {
            btnTwoMin = 0;
        }
    }, 50);
    stopTwo.addEventListener("click", ()=> {
        clearInterval(counterTwo);
        stopTwoValue = btnTwoMin;
        target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
    });
    // counter 3rd and its stop event
    const counterThree = setInterval(() => {
        if (btnThreeMin < btnThreeMax) {
            btnThreeMin++;
            if (btnThreeMin < 10) {
                btnThreeMin = `0${btnThreeMin}`;
            }
            btnThree.value = btnThreeMin;
        } else {
            btnThreeMin = 0;
        }
    }, 50);
    stopThree.addEventListener("click", ()=> {
        clearInterval(counterThree);
        stopThreeValue = btnThreeMin;
        target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
    });
    // counter 4th and its stop event
    const counterFour = setInterval(() => {
        if (btnFourMin < btnFourMax) {
            btnFourMin++;
            if (btnFourMin < 10) {
                btnFourMin = `0${btnFourMin}`;
            }
            btnFour.value = btnFourMin;
        } else {
            btnFourMin = 0;
        }
    }, 50);
    stopFour.addEventListener("click", ()=> {
        clearInterval(counterFour);
        target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
    });




})();
