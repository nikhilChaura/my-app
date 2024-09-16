// Get all the boxes
const boxes = document.querySelectorAll('.box');

// Add event listener for each box
boxes.forEach(box => {
    box.addEventListener('click', function() {
        // Get the color from the data attribute
        const color = this.getAttribute('data-color');
        // Change the background color of the body
        document.body.style.backgroundColor = color;
    });
});
