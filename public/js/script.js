document.addEventListener("DOMContentLoaded", () => {
    const userPillBtn = document.getElementById("userPillBtn");
    const navMenu = document.getElementById("navMenu");

    if (userPillBtn && navMenu) {
        // Toggle Dropdown
        userPillBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("show");
        });

        // Close on Outside Click
        window.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !userPillBtn.contains(e.target)) {
                navMenu.classList.remove("show");
            }
        });

        // Close on ESC key press
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
            }
        });
    }
});


// custom Bootstrap validation
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()