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

    const target = document.querySelector("#target");

    const btnOne = document.querySelector("#part-one");
    let btnOneMin = btnOne.getAttribute("data-min");
    const btnOneMax = btnOne.getAttribute("data-max");

    const btnTwo = document.querySelector("#part-two");
    let btnTwoMin = btnTwo.getAttribute("data-min");
    const btnTwoMax = btnTwo.getAttribute("data-max");

    const btnThree = document.querySelector("#part-three");
    let btnThreeMin = btnThree.getAttribute("data-min");
    const btnThreeMax = btnThree.getAttribute("data-max");

    const btnFour = document.querySelector("#part-four");
    let btnFourMin = btnFour.getAttribute("data-min");
    const btnFourMax = btnFour.getAttribute("data-max");


    btnOne.addEventListener("click", ()=> {

        if (btnOneMin < btnOneMax) {
            btnOneMin++;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    btnTwo.addEventListener("click", ()=> {
        if (btnTwoMin < btnTwoMax) {
            btnTwoMin++;
        }
    });

    btnThree.addEventListener("click", ()=> {

        if (btnThreeMin < btnThreeMax) {
            btnThreeMin++;
        }
    });

    btnFour.addEventListener("click", ()=> {

        if (btnFourMin < btnFourMax) {
            btnFourMin++;
        }
    });

    if (btnTwoMin < 10) {
        target.innerHTML = `0${btnOneMin} 0${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
    } else {
        target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
    }


})();
