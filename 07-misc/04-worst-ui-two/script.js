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
        btnOneMin++;
        if (btnOneMin <= btnOneMax) {
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    btnTwo.addEventListener("click", ()=> {
        btnTwoMin++;
        if (btnTwoMin <= btnTwoMax) {
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    btnThree.addEventListener("click", ()=> {
        btnThreeMin++;
        if (btnThreeMin <= btnThreeMax) {
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    btnFour.addEventListener("click", ()=> {
        btnFourMin++;
        if (btnFourMin <= btnFourMax) {
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });


})();
