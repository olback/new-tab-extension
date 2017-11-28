/**
 *  New Tab by olback
 *  © 2017 olback.net
 */

/* Update time */
const time = document.getElementById('time');

function showTime() {
    d = new Date();
    time.innerHTML = d.getHours() + ':' + d.getMinutes();
}

setInterval(() => {
    showTime();
}, 5000)

showTime();


/* Handle search */
document.getElementById("search-icon").addEventListener("click", () => {
    search();
});

const searchInput = document.getElementById("search");
const searchEngineUrl = 'https://www.google.se/search?q=';

function search() {
    if(searchInput.value.replace(/\s/g,'') !== "") {
        window.location = searchEngineUrl + searchInput.value;
    }
}
