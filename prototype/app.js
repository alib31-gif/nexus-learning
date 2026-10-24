// app.js: the JavaScript for your prototype.
// JavaScript makes the page DO things when people click, type or scroll.

// 1. Find the parts of the page we want to use (by their id in index.html).
const button = document.getElementById('main-button');
const message = document.getElementById('message');

// 2. Keep track of how many times the button was clicked.
let clicks = 0;

// 3. Run this code every time someone clicks the button.
button.addEventListener('click', function () {
  clicks = clicks + 1;
  message.textContent = 'You clicked ' + clicks + ' time' + (clicks === 1 ? '' : 's') + '. Now make it do something useful.';
});

// WHERE TO START
// Replace the code above with your ONE core feature.
// Ask Qwen for one small step at a time, and read what each line does
// before you paste it in.
