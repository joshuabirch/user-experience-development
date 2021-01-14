 //initialise Shoelace drawer and add event listeners to toggle the drawer
(() => {
    const drawer = document.querySelector('.drawer-placement-bottom');
    const openButton = document.getElementById('addBtn');
    const closeButton = drawer.querySelector('sl-button[type="primary"]');

    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());
})();

(() => {
    const drawer = document.querySelector('.basketball');
    const openButton = document.getElementById('send-challenge');
    const closeButton = drawer.querySelector('sl-button[type="primary"]');

    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());
})();

(() => {
    const drawer = document.querySelector('.compare-statistics');
    const openButton = document.getElementById('compare-statistics');
    const closeButton = drawer3.querySelector('sl-button[type="primary"]');

    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());
})();

//add functionality to the add drinks ring

//gather elements in the document - the sl-progress-ring, add button and minus button via classes & ID's 
const progressRing = document.querySelector('.add-ring');
const subtractButton = document.getElementById('minus-btn');
const addButton = document.getElementById('add-btn');

//gather elements for the add drinks 
const homeRing = document.querySelector('.progress-ring-labels');
const addDrinksButton = document.getElementById('drawerAdd');

//gather drawer element
const drawer = document.querySelector('.drawer-placement-bottom');


//add event listener to the add button to increase the progress by 10
addButton.addEventListener('click', () => {
const percentage = Math.min(100, progressRing.percentage + 10);
progressRing.percentage = percentage;
progressRing.textContent = `${percentage}` / 10;
});

//add event listener to the minus button to decrease the progress by 10
subtractButton.addEventListener('click', () => {
const percentage = Math.max(0, progressRing.percentage - 10);
progressRing.percentage = percentage;
progressRing.textContent = `${percentage}` / 10;
});

//add event listener to the add drink button
addDrinksButton.addEventListener('click', () => {
const percentage = progressRing.percentage / 10;
const homeRingPercentage = homeRing.percentage;
const diff = homeRingPercentage - percentage;

// if the difference is below 0, dont add the drinks to prevent negative values
if (diff >= 0) {
    homeRing.percentage = diff;
    homeRing.textContent = `${diff}`;
    progressRing.percentage = 0;
    progressRing.textContent = `0`;
    drawer.hide();
}
});