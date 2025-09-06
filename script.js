// Surprise button
const surpriseBtn = document.getElementById('surprise-btn');
const surpriseDiv = document.getElementById('surprise');

if (surpriseBtn && surpriseDiv) {
    surpriseBtn.addEventListener('click', function() {
        surpriseDiv.classList.toggle('hidden');
    });
} else {
    console.error("Button or surprise div not found!");
}

// Gallery click effect (popup alert for demo)
const galleryImgs = document.querySelectorAll('.gallery-img');
galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        alert("Wow, you love this Won Ji-an pic! 🌸");
    });
});