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


        let tdArray = [];
        let td;
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                td = document.createElement('td');
                tr.appendChild(td);
                tdArray.push(td);
            }
            tbody.appendChild(tr);
        }


        table.appendChild(tbody);
        target.appendChild(table);


        let multiplication = [];
        let num;
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {
                num = i * j;
                multiplication.push(num);
            }
        }

        multiplication.forEach(($mun, index)=> {
            tdArray[index].innerHTML = multiplication[index];
        })
        console.log(tdArray);
        console.log(multiplication);


    }
    tableRow();

})();
