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

    function tableRow() {
        const target = document.querySelector("#target");
        let table = document.createElement("table");
        let tbody = document.createElement('tbody');

        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                if (i === 1 && j === 10) {
                    break
                } else {
                    let td = document.createElement('td');
                    tr.appendChild(td)
                }
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        target.appendChild(table)
    }
    tableRow();



})();
