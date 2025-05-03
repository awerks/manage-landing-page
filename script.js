document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonials div");
    const dots = document.querySelectorAll(".dot-indicators > button");
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

});