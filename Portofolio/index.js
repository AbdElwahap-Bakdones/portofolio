const toggleButtons = document.querySelectorAll(".Links");
const contentElements = document.querySelectorAll(".sections");

let currentContentIndex = -1;

toggleButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (currentContentIndex !== -1) {
            contentElements[currentContentIndex].style.display = "none";
        }

        const content = contentElements[index];
        if (content.style.display === "none" || getComputedStyle(content).display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }

        currentContentIndex = index;
    });
});