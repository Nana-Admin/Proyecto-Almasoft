<<<<<<< HEAD
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = '../inicio/inicio.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

=======
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = '../inicio/inicio.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
