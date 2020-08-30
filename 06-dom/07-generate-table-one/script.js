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

    // select the target where the table will be and create table and tbody
    const target = document.querySelector("#target");
    const table = document.createElement("table");
    const tbody = document.createElement('tbody');

    // use for loop to make 10 rows with 10 column each
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 1; j++) {
            let td = document.createElement('td');

            // append td to the tr parent
            tr.appendChild(td);
        }
        // append tr to the tbody parent
        tbody.appendChild(tr);
    }

    // append tbody to the table and table to the target
    table.appendChild(tbody);
    target.appendChild(table);

})();
