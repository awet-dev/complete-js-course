/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
        tdArray.push(document.createElement("td"));

        trArray.push(document.createElement("tr"));
    }
    tdArray.forEach(($td, index)=> {
        trArray[index].append($td);
        table.append(trArray[index]);
    })
    document.querySelector("#target").append(table);

})();
