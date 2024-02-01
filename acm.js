document.addEventListener("DOMContentLoaded", function () {
    const anim = document.querySelector(".animation h1");
    const text = anim.innerText.split("");
    anim.innerText = "";

    function typeWriter(index) {
        if (index < text.length) {
            anim.innerText += text[index];
            if (text[index] === ' ') {
                anim.innerText += '\xa0';
            }
            setTimeout(function () {
                typeWriter(index + 1);
            }, 100);
        } else {
            setTimeout(function () {
                anim.innerText = "";
                typeWriter(0);
            }, 50);
        }
    }
    typeWriter();
});
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.onclick = function () {
    navBar.classList.toggle("active");
}

function submitForm() {
    // Assuming the form has an id of 'feedbackForm'
    var form = document.getElementById("feedbackForm");

    // Simulate form submission (replace this with your actual form submission logic)
    // For demonstration purposes, we'll just show an alert
    alert("Form submitted successfully!");

    // Clear the form data
    form.reset();
}
