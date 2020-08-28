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
   /*
    let tdArray = [];
    let trArray = [];
    for(let i = 0; i < 11; i++) {
        for (let i = 0; i < 10; i++) {
            tdArray.push(document.createElement("td"));
            trArray.push(document.createElement("tr"));
        }
    }
    tdArray.forEach(($td, index)=> {
        trArray[index].append($td);
        table.append(trArray[index]);
    })

    */

    // select target
    const target = document.querySelector("#target");

    // 1. create td and tr, then append td to tr
    let tr1 = document.createElement("tr");
    let tdTr1 = [];
    for (let i = 0; i < 11; i++) {
        tdTr1.push(document.createElement("td"));
        tr1.appendChild(tdTr1[i]);
    }

    // 2. create table and append tr to it
    let table = document.createElement("table");
    table.appendChild(tr1);
    target.appendChild(table);





})();
