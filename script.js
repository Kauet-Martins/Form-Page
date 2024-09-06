// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.formu');
    
    form.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
       

        if (!email || !password) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');
        }
    });
});
