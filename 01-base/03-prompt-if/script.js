/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  function getAnswer() {
      let wantCake = prompt("Do you want some cake?");
      if (wantCake) {
          if (wantCake === "yes") {
              alert("Congratulation!");
          } else if (wantCake === "no") {
              alert("More cake for me then please!")
          } else {
              alert("I don't know what you say?")
          }
      } else {
          alert("Please Enter Your Answer")
          getAnswer();
      }
  }
  getAnswer();

})();