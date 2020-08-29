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

    // select the html element
    const tagContent = document.getElementById("target");

    // create weekdays and yearmonth array
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const yearmonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // create date object
    const now = new Date();

    // convert day and month in readable name of time
    const days = weekdays[now.getDay()];
    const month = yearmonth[now.getMonth()];

    // display the data to the html element
    tagContent.innerHTML = `${days} ${now.getDate()} ${month} ${now.getFullYear()} ${now.getHours()}h${now.getMinutes()}`;

})();
