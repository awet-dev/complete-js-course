/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.querySelector("#target");
    const table = document.createElement("table");
    let tdArray = [];
    let trArray = [];
    for (let i = 0; i < 10; i++) {
        for (let x = 0; x < 10; x++) {
            tdArray.push(document.createElement("td"));
        }
        trArray.push(document.createElement("tr"));
    }
    tdArray.forEach(($td, index)=> {
        trArray[index].append($td);
        table.append(trArray[index]);
    })
    document.querySelector("#target").append(table);




})();
