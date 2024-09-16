// Button Click Event
const button = document.getElementById('clickBtn');
button.addEventListener('click', function() {
    const heading = document.getElementById('heading');
    heading.innerHTML = 'Button Clicked!';
    heading.style.color = 'blue';
});

// Form Submit Event
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from submitting
    alert('Form submitted!');
});

// Input Focus and Blur Event
const input = document.getElementById('nameInput');
input.addEventListener('focus', function() {
    input.style.backgroundColor = '#e0f7fa';
});
input.addEventListener('blur', function() {
    input.style.backgroundColor = '#ffffff';
});

// Keydown Event
const keyInfo = document.getElementById('keyInfo');
document.addEventListener('keydown', function(event) {
    keyInfo.innerHTML = `You pressed: ${event.key}`;
});
