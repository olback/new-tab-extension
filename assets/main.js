/**
 *  New Tab by olback
 *  © 2017 olback.net
 */

/* Update time */
const time = document.getElementById('time');

function showTime() {
    d = new Date();
    let min = d.getMinutes();
    if(min < 10) min = '0' + min;
    time.innerHTML = d.getHours() + ':' + min;
}

setInterval(() => {
    showTime();
}, 5000)

showTime();


/* Handle search */
const searchInput = document.getElementById("search");
const searchEngineUrl = 'https://www.google.se/search?q=';

document.getElementById("search-icon").addEventListener("click", () => {
    search();
});

document.getElementById("search").addEventListener("keypress", (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        search();
    }
});

function search() {
    if(searchInput.value.replace(/\s/g,'') !== "") {
        window.location = searchEngineUrl + searchInput.value;
    }
}
