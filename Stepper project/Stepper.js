let currentIndex = 0; 
const circles = document.querySelectorAll('.circle');

function activateCircle(index) {
    circles.forEach((circle, i) => {
        if (i === index) {
            circle.classList.add('active'); 
        } else {
            circle.classList.remove('active'); 
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % circles.length; 
    activateCircle(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + circles.length) % circles.length; 
    activateCircle(currentIndex);
});

activateCircle(currentIndex);