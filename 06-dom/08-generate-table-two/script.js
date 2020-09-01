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

    /*
    (function() {
    var multTable = {};
    let scrum = ""
    for (var v = 1; v < 11; v++) {
        multTable[v] = {};
        scrum = scrum + "<tr>";
        for (var i = 1; i < 11; i++) {
            multTable[v][i] = i * v;
            scrum = scrum + "<td>" + multTable[v][i] + "</td>";
        }scrum = scrum + "</tr>"
    }
    document.getElementById("target").innerHTML = "<table id='tbody'>" + scrum + "</table>"
})();
     */

    function tableRow() {

        // select the target and create table and tbody elements
        const target = document.querySelector("#target");
        const table = document.createElement("table");
        const tbody = document.createElement('tbody');

        // create empty array for the table data and for multiplication
        const tdArray = [];
        const multiplication = [];

        // loop to create 10 table rows each with 10 columns manipulate the multiplication operation
        for (let i = 0; i < 10; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                const td = document.createElement('td');

                // append the table data to the table rows and push it to the tdArray
                tr.appendChild(td);
                tdArray.push(td);

                // make the multiplication operation and push result to the multiplication array
                const num = (i+1) * (j+1);
                multiplication.push(num);

            }
            // append table rows to the tbody
            tbody.appendChild(tr);
        }
        // append tbody to table and table to target
        table.appendChild(tbody);
        target.appendChild(table);

        // place the result of the multiplication to the respective position in the table
        multiplication.forEach(($mun, index)=> {
            tdArray[index].innerHTML = multiplication[index];
        })
    }

    tableRow();

})();
