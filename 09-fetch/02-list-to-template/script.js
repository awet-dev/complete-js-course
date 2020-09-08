/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const target = document.querySelector("#target");
    let temp = document.querySelector("#tpl-hero");
    let list = temp.content.querySelector("li");
    let title = temp.content.querySelector("h4");
    let strong = temp.content.querySelector("strong");
    let emphasis = temp.content.querySelector("em");
    let para = temp.content.querySelector("p");

    const fetchData = ()=> {
        // fetch the data and then display by passing it to json method
        fetch('http://localhost:3000/heroes')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            for (let i = 0; i < data.length; i++) {
                strong.innerHTML = data[i].name;
                emphasis.innerHTML = data[i].alterEgo;
                para.innerHTML = data[i].abilities;
                title.appendChild(strong);
                title.appendChild(emphasis);
            }
            list.appendChild(title);
            list.appendChild(para);
            target.appendChild(list);

        })
    };
    // listen to the click event
    document.querySelector("#run").addEventListener("click", fetchData);
})();
