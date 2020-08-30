/* becode/javascript
 *
 * /05-arrays/06-find-in-array/script.js - 5.6: recherche dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const people = [
        {
            firstname: "Bradford",
            lastname: "Coldbath",
            email: "bcoldbath0@wired.com",
        },
        {
            firstname: "Nadiya",
            lastname: "Stendell",
            email: "nstendell1@nsw.gov.au",
        },
        {
            firstname: "Auroora",
            lastname: "Stapford",
            email: "astapford2@wsj.com",
        },
        {
            firstname: "Berkley",
            lastname: "McKall",
            email: "bmckall3@about.me",
        },
        {
            firstname: "Wolf",
            lastname: "McCurley",
            email: "wmccurley4@yale.edu",
        },
        {
            firstname: "Jorrie",
            lastname: "Canedo",
            email: "jcanedo5@engadget.com",
        },
        {
            firstname: "Bethanne",
            lastname: "Ackred",
            email: "backred6@imgur.com",
        },
        {
            firstname: "Zorah",
            lastname: "Whild",
            email: "zwhild7@sogou.com",
        },
        {
            firstname: "Jean",
            lastname: "Dupont",
            email: "jdupont@elpais.com",
        },
        {
            firstname: "Zulema",
            lastname: "Ericsson",
            email: "zericsson9@ed.gov",
        },
        {
            firstname: "Brady",
            lastname: "Scrannage",
            email: "bscrannagea@google.fr",
        },
        {
            firstname: "Isidore",
            lastname: "Korf",
            email: "ikorfb@google.com",
        },
        {
            firstname: "Bartholomew",
            lastname: "Stockbridge",
            email: "bstockbridgec@is.gd",
        },
        {
            firstname: "Laney",
            lastname: "O' Mara",
            email: "lomarad@forbes.com",
        },
        {
            firstname: "Gabe",
            lastname: "Keatch",
            email: "gkeatche@google.fr",
        },
    ];

    // listen to the click event and display the email address of specific person
    document.querySelector("#run").addEventListener("click", () => {

        // get the email with the find method and the index of the email
        const found = people.find($person => $person.firstname === "Jean" && $person.lastname === "Dupont");
        const indexEmail = people.indexOf(found);

        // display in the console the result in with text template ``
        console.log(`Email: ${found.email} and its Index: ${indexEmail}`);
    })

})();
