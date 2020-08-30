/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the password, confirm and checkBtn elements
    const password = document.querySelector("#pass-one");
    const confirm = document.querySelector("#pass-two");
    const checkBtn = document.querySelector("#run");

    // listen to click event of the checkBtn
    checkBtn.addEventListener("click", ()=> {

        // check if the values of password and confirm are the same
        if (password.value !== confirm.value) {

            // if they are not the same add error class to both of the elements
            password.classList.add("error");
            confirm.classList.add("error");
        }
    })


})();
