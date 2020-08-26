/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let tagContent = document.getElementById("target");
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let yearmonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let now = new Date();
    let days = weekdays[now.getDay()];
    let month = yearmonth[now.getMonth()];
    weekdays.forEach(function () {
        yearmonth.forEach(function () {
            tagContent.innerHTML = `${days} ${now.getDate()} ${month} ${now.getFullYear()} ${now.getHours()}h${now.getMinutes()}`;
        })
    })
})();
