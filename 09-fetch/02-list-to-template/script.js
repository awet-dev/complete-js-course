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

    const fetchData = ()=> {
        // fetch the data and then display by passing it to json method
        fetch('http://localhost:3000/heroes')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            let temp, hero, title, names, alterTag, power;
            temp = document.getElementsByTagName("template")[0];
            hero = temp.content.querySelector("li");
            title = temp.content.querySelector("li h4");
            names = temp.content.querySelector("li h4 strong");
            alterTag = temp.content.querySelector("li h4 em");
            power = temp.content.querySelector("li p");
            let n;
            for (let i = 0; i < data.length; i++) {
                title = document.importNode(hero, true);
                names = document.importNode(title, true);
                names.textContent = data[i].name;
                alterTag = document.importNode(title, true);
                alterTag.textContent = data[i].alterEgo;
                power = document.importNode(hero, true);
                power.textContent = data[i].abilities;

            }
            target.appendChild(hero);



        })
    };
    // listen to the click event
    document.querySelector("#run").addEventListener("click", fetchData);
})();
