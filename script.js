document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonials div");
    const dots = document.querySelectorAll(".dot-indicators > button");
    const form = document.querySelector("#newsletter-form");
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            const activeTestimonial = document.querySelector(".testimonials div:not(.hidden)");
            const activeDot = document.querySelector(".dot-indicators > button[data-active]");

            activeTestimonial.classList.add("hidden");
            testimonials[index].classList.remove("hidden");

            if (activeDot) {
                activeDot.removeAttribute("data-active");
            }
            dot.setAttribute("data-active", "true");
        });
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const emailInput = document.querySelector("#email");
        const errorMessage = document.querySelector("#error-message");
        const email = emailInput.value;
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)) {
            emailInput.setCustomValidity("Invalid email address");
            errorMessage.classList.remove("hidden");
            return;
        }
        emailInput.setCustomValidity("");
        errorMessage.classList.add("hidden");
    });
});