// Nav menu pop-up
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show');
}

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